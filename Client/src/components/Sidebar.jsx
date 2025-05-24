import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaAward, FaUsers, FaPoll, FaCalendar, FaPhotoVideo, FaChartBar, FaStar, FaBlog } from "react-icons/fa";

const navItems = [
  { path: "/", label: "Dashboard", icon: <FaHome /> },
  { path: "/profiles", label: "Profiles", icon: <FaUser /> },
  { path: "/recognition", label: "Recognition", icon: <FaAward /> },
  { path: "/groups", label: "Groups", icon: <FaUsers />, badge: "12" },
  { path: "/polls", label: "Polls", icon: <FaPoll /> },
  { path: "/events", label: "Events", icon: <FaCalendar /> },
  { path: "/media", label: "Media", icon: <FaPhotoVideo /> },
  { path: "/leaderboard", label: "Leaderboard", icon: <FaChartBar /> },
  { path: "/spotlights", label: "Spotlights", icon: <FaStar /> },
  { path: "/blog", label: "HR Blog", icon: <FaBlog /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow px-4 py-6 fixed">
      <h1 className="text-xl font-bold mb-6 text-blue-600">HRMS Social Hub</h1>
      <nav className="flex flex-col gap-4">
        {navItems.map(({ path, label, icon, badge }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) =>
              `flex justify-between items-center px-3 py-2 rounded hover:bg-blue-100 ${
                isActive ? "bg-blue-200 font-semibold" : "text-gray-700"
              }`
            }
          >
            <span className="flex items-center gap-2">{icon} {label}</span>
            {badge && (
              <span className="bg-gray-300 text-xs px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center gap-2">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="User" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-xl font-semibold">John Doe</p><br />
            {/* <p className="text-xs text-gray-500">Product Designer</p> */}
          </div>
        </div>
      </div>
    </aside>
  );
}
