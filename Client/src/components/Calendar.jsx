import React, { useState } from 'react';

export default function Calendar() {
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
          return (
            <div
              key={index}
              className={`h-12 flex items-center justify-center border rounded ${
                isToday ? 'bg-blue-100 text-blue-700 font-medium' : ''
              }`}
            >
              {day || ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}










// export default function Calendar() {
//   return (
//     <div className="bg-white rounded-lg p-4 shadow">
//       <h2 className="text-xl font-bold mb-2">Company Events</h2>
//       <div className="grid grid-cols-7 gap-2">
//         {[...Array(31).keys()].map(day => (
//           <div key={day} className="h-16 flex items-center justify-center border">
//             {day + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
