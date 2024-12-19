import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'

const CalendarComponent = () => {
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileClassName = ({ date }) => {
    if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
      return 'highlight';
    }
    return null;
  };

  const navigateToCurrentMonth = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className='w-full flex flex-col items-center'>

    <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor:'white' , width:"90%"}}>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', width:"100%" }}>
        <button onClick={() => document.querySelector('.react-calendar__navigation__prev-button').click()}>
          &#8249; 
        </button>
        <p style={{ marginTop: '2px',  }}>
       <b>{selectedDate.toDateString()}</b>
      </p>
        <button onClick={() => document.querySelector('.react-calendar__navigation__next-button').click()}>
           &#8250;
        </button>
        <button onClick={navigateToCurrentMonth}>This Month</button>
      </div>

    </div>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        navigationLabel={({ date }) => `${date.toLocaleString('default', { month: 'long' })}`}
        prev2Label={null} // Remove previous year button
        next2Label={null} // Remove next year button
      />
    </div>
  )
}


export default CalendarComponent