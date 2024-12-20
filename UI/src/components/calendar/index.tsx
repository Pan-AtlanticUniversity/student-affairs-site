import { useState, useEffect, useRef } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Badge, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { dark, disabled, purple } from '../../context/theme';
import { DayCalendarSkeleton, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import FileUploadIcon from '@mui/icons-material/FileUpload';

import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import defaultImage from '../../assets/images/transparent-pau-logo.png'
import axios from 'axios';


/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch({ signal }: { signal: AbortSignal }) {
    return new Promise<{ daysToHighlight: Event[] }>((resolve, reject) => {
        const timeout = setTimeout(() => {
            const daysToHighlight: Event[] = [
                {
                    name: 'Event 1',
                    content: 'Event 1 content',
                    date: dayjs('2024-12-12'),
                },
                {
                    name: 'Event 2',
                    content: 'Event 1 content',
                    date: dayjs('2024-12-15'),
                }
            ];

            resolve({ daysToHighlight });
        }, 500);

        signal.onabort = () => {
            clearTimeout(timeout);
            reject(new DOMException('aborted', 'AbortError'));
        };
    });
}



interface Event {
    _id?: string;
    name?: string;
    content?: string;
    date?: Dayjs;
    image?: File
}

const Calendar: React.FC<{ isAdmin: boolean }> = ({ isAdmin }) => {

    const requestAbortController = useRef<AbortController | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [highlightedDays, setHighlightedDays] = useState<Event[] | null>([]);

    const [open, setOpen] = useState(false);

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const handleClose = async () => {
        setOpen(false);
        setSelectedEvent({ image: await convertDefaultImageToFile(defaultImage) });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name == 'image') {
            const input = event.target as HTMLInputElement;
            const file = input.files?.[0];
            if (file) {
                setSelectedEvent((prev) => ({ ...prev, eventImage: file }));
            }
        } else {
            setSelectedEvent((prev) => ({ ...prev, [name]: value }));
        }
    };

    const convertDefaultImageToFile = async (defaultImagePath: string) => {
        try {
            const response = await fetch(defaultImagePath); // Fetch the image
            const blob = await response.blob(); // Convert the response to a Blob
            return new File([blob], 'defaultImage.png', { type: blob.type }); // Create a File object
        } catch (error) {
            console.error('Error converting image to file:', error);
        }
    };

    function ServerDay(props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) {
        const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

        const isSelected =
            !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

        return (
            <Badge
                key={props.day.toString()}
                overlap="circular"
                badgeContent={isSelected ? <LocalActivityIcon sx={{ fontSize: 14 }} color="secondary" /> : undefined}
            >
                <PickersDay
                    {...other}
                    outsideCurrentMonth={outsideCurrentMonth}
                    day={day}
                    onClick={() => {
                        if (isAdmin) openDialog(day); // Open dialog if admin
                        else if (isSelected) console.log('View data as user');
                    }}
                    sx={{ border: `${isSelected ? 1 : 0}px ${purple} solid` }}
                />
            </Badge>
        );
    }

    const handleEventUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = {
            entity_type: 'events',
            event_date: selectedEvent?.date?.format('YYYY-MM-DD'),
            ...Object.fromEntries((formData).entries()),
        };

        try {
            const response = await axios.patch<Event>(
                `${import.meta.env.VITE_BACKEND_HOST}/api/v1/date${selectedEvent?._id ? '/' + selectedEvent._id : ''}`,
                formJson,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            const newEvent = response.data;
            const imageFile = await convertDefaultImageToFile(newEvent.image?.name || defaultImage)
            setHighlightedDays(prev => [...(prev ?? []), { ...newEvent, image: imageFile, date: dayjs(newEvent.date) }]);
            handleClose()

        } catch (error) {
            console.error("Error uploading event:", error);
        }
    }

    const deleteEvent = async (event: React.FormEvent<HTMLFormElement>) => {

        try {
            await axios.delete<Event>(
                `${import.meta.env.VITE_BACKEND_HOST}/api/v1/date${selectedEvent?._id ? '/' + selectedEvent._id : ''}`
            );

            setHighlightedDays(prev => [...(prev?.filter(event => event._id === selectedEvent?._id) ?? [])]);
            handleClose()

        } catch (error) {
            console.error("Error uploading event:", error);
        }
    }

    const openDialog = (day: Dayjs) => {
        setOpen(true);

        const selected = highlightedDays?.find(highlightedDay => highlightedDay.date?.isSame(day, 'day'));

        // Combine updates into one state setter call
        (async () => {
            const image = selected?.image ?? await convertDefaultImageToFile(defaultImage);
            setSelectedEvent(prev => ({
                ...selected,
                image,
                date: day,
            }));
        })();
    };

    const fetchHighlightedDays = () => {
        const controller = new AbortController();
        fakeFetch({
            signal: controller.signal,
        })
            .then(({ daysToHighlight }) => {
                console.log(daysToHighlight)
                setHighlightedDays(daysToHighlight);
                setIsLoading(false);
            })
            .catch((error) => {
                // ignore the error if it's caused by `controller.abort`
                if (error.name !== 'AbortError') {
                    throw error;
                }
            });

        requestAbortController.current = controller;
    };

    useEffect(() => {
        fetchHighlightedDays();

        (async () => {
            const defaultImageFile = await convertDefaultImageToFile(defaultImage);
            setSelectedEvent({ image: defaultImageFile });
        })()
        // abort request on unmount
        return () => requestAbortController.current?.abort();
    }, []);

    useEffect(() => {
        console.log(highlightedDays)
    }, [highlightedDays])

    const handleMonthChange = () => {
        if (requestAbortController.current) {
            // make sure that you are aborting useless requests
            // because it is possible to switch between months pretty quickly
            requestAbortController.current.abort();
        }

        setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays();
    };

    return (
        <>
            <Paper
                square={false}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 2,
                    padding: "30px 20px 0 20px",
                    borderRadius: "20px",
                    backgroundColor: grey,
                    width: "fit-content",
                    zIndex: 1,
                }}
                elevation={3}
            >
                <Typography variant="h5" color={dark}>
                    Upcoming dates and events
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={dayjs(Date.now())}
                        loading={isLoading}
                        onMonthChange={handleMonthChange}
                        renderLoading={() => <DayCalendarSkeleton />}
                        slots={{
                            day: ServerDay,
                        }}
                        slotProps={{
                            day: {
                                highlightedDays: highlightedDays?.map((event) => event.date?.date()) || [],
                            } as any,
                        }}
                    />
                </LocalizationProvider>
            </Paper>

            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        handleEventUpload(event);
                    },
                }}
            >
                <DialogTitle>Edit events</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        id="event_date"
                        name="event_date"
                        type="text"
                        fullWidth
                        value={selectedEvent?.date?.format('YYYY-MM-DD')}
                        sx={{ marginTop: 3 }}
                        disabled
                    />
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Event Name"
                        type="text"
                        fullWidth
                        value={selectedEvent?.name}
                        onChange={handleInputChange}
                        sx={{ marginTop: 3 }}

                    />
                    <TextField
                        required
                        id="content"
                        name="content"
                        label="Event content"
                        placeholder="Event content"
                        type="text"
                        multiline
                        fullWidth
                        value={selectedEvent?.content}
                        onChange={handleInputChange}
                        rows={5}
                        sx={{ marginTop: 3 }}
                    />
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ marginTop: 3, borderColor: disabled, textTransform: 'capitalize', paddingTop: 1.5, paddingBottom: 1.5 }}
                        fullWidth
                        endIcon={<FileUploadIcon />}
                    >
                        {selectedEvent?.image?.name}
                        <input
                            type="file"
                            accept="image/*"
                            id="image"
                            name="image"
                            onChange={handleInputChange}
                            hidden
                        />
                    </Button>
                </DialogContent>
                <DialogActions>
                    {selectedEvent?._id && (
                        <Button onClick={deleteEvent} variant={'contained'} sx={{ backgroundColor: 'error.main', textTransform: 'capitalize', marginRight: 'auto' }}>Delete</Button>
                    )}
                    <Button onClick={handleClose} variant={'outlined'} sx={{ borderColor: 'secondary.main', textTransform: 'capitalize' }}>Cancel</Button>
                    <Button type="submit" variant={'contained'} sx={{ backgroundColor: 'secondary.main', textTransform: 'capitalize' }}>Upload event</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Calendar