import React, { useState } from 'react';

export default function Calendar({ onDateClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const today = new Date();

  return (
    <>
    
    <div className="bg-white rounded-lg p-4 shadow">
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} className="text-blue-500">&lt;</button>
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth} className="text-blue-500">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center font-semibold">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
        {days.map((day, index) => {
          const isToday =
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

          return (
            <div
              key={index}
              onClick={() => day && onDateClick(dateObj)}
              className={`h-12 flex items-center justify-center border rounded cursor-pointer ${
                isToday ? 'bg-blue-100 text-blue-700 font-medium' : ''
              }`}
            >
              {day || ''}
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
