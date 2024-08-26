import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material'
interface MessageProps {
    message: string | null;
    openState: boolean;
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
    mode: 'success' | 'error' | 'warning' | 'info';
}


const Message: React.FC<MessageProps> = ({ message, openState, setOpenState, mode }) => {

    const handleClose = (
        _event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenState(false);
    };
    return (
        <>
            <Snackbar open={openState} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert
                    onClose={handleClose}
                    severity={mode}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Message