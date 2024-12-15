import React, { useState } from 'react';

  function Calendar({ onDateClick }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const days = daysInMonth(month, year);
      const firstDay = firstDayOfMonth(month, year);
      const today = new Date();

      const calendar = [];
      for (let i = 0; i < firstDay; i++) {
        calendar.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
      }
      for (let day = 1; day <= days; day++) {
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
        calendar.push(
          <div
            key={day}
            className={`calendar-day ${isToday ? 'today' : ''}`}
            onClick={() => onDateClick && onDateClick(new Date(year, month, day))}
          >
            {day}
          </div>
        );
      }

      return (
        <div className="calendar-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="calendar-day-name">{day}</div>
          ))}
          {calendar}
        </div>
      );
    };

    const handlePrevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleToday = () => {
      setCurrentDate(new Date());
    };

    return (
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>Previous</button>
          <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonth}>Next</button>
          <button onClick={handleToday}>Today</button>
          <button onClick={() => alert('Apply Menu functionality coming soon!')}>Apply Menu</button>
        </div>
        {renderCalendar()}
      </div>
    );
  }

  export default Calendar;
