import React, { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Event {
  date: string;
  event: string;
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<Event[]>("http://localhost:4001/api/v1/date");
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching event dates:', error);
      }
    };

    fetchEvents();
  }, []);

  const handlePrevMonth = () => {
    setCurrentMonth(prev => prev.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => prev.add(1, 'month'));
  };

  const renderCalendarDays = () => {
    const startOfMonth = currentMonth.startOf('month');
    const endOfMonth = currentMonth.endOf('month');
    const days = [];

    let day = startOfMonth.startOf('week');
    while (day.isBefore(endOfMonth.endOf('week'))) {
      days.push(day);
      day = day.add(1, 'day');
    }

    return days.map(d => {
      const eventsForDay = events.filter(event => event.date === d.format('YYYY-MM-DD'));
      return (
        <Box
          key={d.toString()}
          sx={{
            border: '1px solid #ccc',
            padding: '10px',
            textAlign: 'center',
            width: '100px',
            height: '100px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: eventsForDay.length ? '#f0f8ff' : 'transparent',
          }}
        >
          <Typography variant="body1">{d.format('D')}</Typography>
          {eventsForDay.length > 0 && (
            <Box sx={{ mt: 1 }}>
              {eventsForDay.map((event, index) => (
                <Typography key={index} variant="body2" sx={{ color: '#007bff' }}>
                  {event.event} {/**curse you */}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      );
    });
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Button onClick={handlePrevMonth}>Previous</Button>
        <Typography variant="h6">{currentMonth.format('MMMM YYYY')}</Typography>
        <Button onClick={handleNextMonth}>Next</Button>
      </Box>
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '10px' 
        }}
      >
        {renderCalendarDays()}
      </Box>
    </Box>
  );
};

export default Calendar;
