import './App.css';
import './When2Cook.css';
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function When2Cook() {
  const [defaultDate, setDefaultDate] = useState<Dayjs | null>(dayjs(new Date()));

  useEffect(() => {
    if (location.search == '') {

    }

    else {

    }
  }, []);

  return (
    <div className='when2cook'>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={defaultDate} onChange={(newValue) => setDefaultDate(newValue)} />
      </LocalizationProvider>
    </div>
  )
};