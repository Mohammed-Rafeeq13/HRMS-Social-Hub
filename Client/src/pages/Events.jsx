import React, { useState } from 'react';
import Calendar from '../components/Calendar';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      title: 'Annual Townhall 2024',
      date: 'May 15, 2024',
      location: 'Main Conference Hall',
      image: '/images/events/townhall.jpg',
      description: 'Join us for the Annual Townhall to discuss company achievements and future plans.',
    },
    {
      title: 'Leadership Workshop',
      date: 'May 20, 2024',
      location: 'Training Room B',
      image: '/images/events/workshop.jpg',
      description: 'Enhance your leadership skills in this interactive workshop.',
    },
    {
      title: 'Team Building Event',
      date: 'May 25, 2024',
      location: 'Adventure Park',
      image: '/images/events/teambuilding.jpg',
      description: 'A fun-filled day to strengthen team bonds.',
    },
  ];

  const recentEvents = [
    {
      title: 'Q1 Review Meeting',
      date: 'April 30, 2024',
      location: 'Virtual',
      image: '/images/events/q1review.jpg',
      participants: 45,
      description: 'Review of Q1 performance and setting goals for Q2.',
    },
    {
      title: 'Employee Wellness Day',
      date: 'April 25, 2024',
      location: 'Company Gym',
      image: '/images/events/wellness.jpg',
      participants: 78,
      description: 'A day dedicated to employee health and wellness.',
    },
    {
      title: 'Tech Talk Series',
      date: 'April 20, 2024',
      location: 'Auditorium',
      image: '/images/events/techtalk.jpg',
      participants: 120,
      description: 'Insights into the latest technology trends.',
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeDialog = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Company Events</h2>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <Calendar />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow cursor-pointer"
              onClick={() => handleEventClick(event)}
            >
              <img src={event.image} alt={event.title} className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{event.title}</h4>
                <p className="text-sm text-gray-500">{event.date} | {event.location}</p>
                <p className="text-sm mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Recent Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentEvents.map((event, i) => (
            <div key={i} className="bg-white rounded-lg shadow">
              <img src={event.image} alt={event.title} className="rounded-t-lg w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{event.title}</h4>
                <p className="text-sm text-gray-500">{event.date} | {event.location}</p>
                <p className="text-sm mt-2">{event.description}</p>
                <p className="text-sm text-gray-600 mt-1">Participants: {event.participants}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeDialog}
            >
              ✕
            </button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover rounded" />
            <h3 className="text-2xl font-bold mt-4">{selectedEvent.title}</h3>
            <p className="text-gray-600">{selectedEvent.date} | {selectedEvent.location}</p>
            <p className="mt-2">{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;










// import React from 'react';

// const Events = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Company Events</h2>
//       <div className="bg-white rounded-lg shadow p-4 mb-6">
//         {/* Simple calendar placeholder */}
//         <div className="grid grid-cols-7 gap-2 text-center">
//           {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
//             <div key={day} className="font-semibold">{day}</div>
//           ))}
//           {Array.from({ length: 35 }, (_, i) => (
//             <div
//               key={i}
//               className={`h-12 flex items-center justify-center ${i === 15 ? 'bg-blue-100 text-blue-700 font-medium rounded' : ''}`}
//             >
//               {i < 31 ? i + 1 : ''}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               title: 'Annual Townhall 2024',
//               date: 'May 15, 2024',
//               location: 'Main Conference Hall',
//               image: '/events/townhall.jpg'
//             },
//             {
//               title: 'Leadership Workshop',
//               date: 'May 20, 2024',
//               location: 'Training Room B',
//               image: '/events/workshop.jpg'
//             },
//             {
//               title: 'Team Building Event',
//               date: 'May 25, 2024',
//               location: 'Adventure Park',
//               image: '/events/teambuilding.jpg'
//             }
//           ].map((event, i) => (
//             <div key={i} className="bg-white rounded-lg shadow">
//               <img src={event.image} alt={event.title} className="rounded-t-lg h-36 w-full object-cover" />
//               <div className="p-4">
//                 <h4 className="font-medium">{event.title}</h4>
//                 <p className="text-sm text-gray-500">{event.date}</p>
//                 <p className="text-sm text-gray-500">{event.location}</p>
//                 <button className="mt-2 text-blue-600 font-medium">See</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-2">Recent Events</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {[
//             {
//               title: 'Q1 Review Meeting',
//               date: 'April 30, 2024',
//               location: 'Virtual',
//               image: '/events/q1review.jpg',
//               participants: 45
//             },
//             {
//               title: 'Employee Wellness Day',
//               date: 'April 25, 2024',
//               location: 'Company Gym',
//               image: '/events/wellness.jpg',
//               participants: 78
//             },
//             {
//               title: 'Tech Talk Series',
//               date: 'April 20, 2024',
//               location: 'Auditorium',
//               image: '/events/techtalk.jpg',
//               participants: 120
//             }
//           ].map((event, i) => (
//             <div key={i} className="bg-white rounded-lg shadow">
//               <img src={event.image} alt={event.title} className="rounded-t-lg h-36 w-full object-cover" />
//               <div className="p-4">
//                 <h4 className="font-medium">{event.title}</h4>
//                 <p className="text-sm text-gray-500">{event.date}</p>
//                 <p className="text-sm text-gray-500">{event.location}</p>
//                 <p className="text-sm text-gray-500">{event.participants} Participants</p>
//                 <button className="mt-2 text-blue-600 font-medium">View Photos</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;
