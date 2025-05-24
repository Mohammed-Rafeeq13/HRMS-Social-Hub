export default function EventCard({ title, date, location, img, type }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-sm">
      <img src={img} alt={title} className="rounded mb-3 h-32 w-full object-cover" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{date} - {location}</p>
      {type === 'upcoming' && <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">RSVP</button>}
      {type === 'recent' && <button className="mt-2 border px-3 py-1 rounded">View Photos</button>}
    </div>
  );
}
