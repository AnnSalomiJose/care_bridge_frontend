
// import { useState } from "react";
// import { Outlet, useLocation, Link, NavLink } from "react-router-dom";
// import {
//   FiHeart,
//   FiGrid,
//   FiCalendar,
//   FiClock,
//   FiCheck,
//   FiXCircle,
//   FiUser,
//   FiMenu,
//   FiX,
//   FiBell,
//   FiSettings,
//   FiLogOut,
//   FiVideo,
//   FiMapPin,
//   FiActivity,
//   FiArrowRight,
// } from 'react-icons/fi';

// function DoctorDashboard() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isAvailable, setIsAvailable] = useState(true);

//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       patient: 'Anjali Kumar',
//       reason: 'General consultation',
//       date: '30 Oct 2026',
//       time: '10:00 AM',
//       type: 'Online',
//       status: 'Pending',
//     },
//     {
//       id: 2,
//       patient: 'Rahul Menon',
//       reason: 'Follow-up consultation',
//       date: '30 Oct 2026',
//       time: '11:30 AM',
//       type: 'Hospital Visit',
//       status: 'Pending',
//     },
//     {
//       id: 3,
//       patient: 'Meera Thomas',
//       reason: 'Health consultation',
//       date: '31 Oct 2026',
//       time: '02:00 PM',
//       type: 'Online',
//       status: 'Pending',
//     },
//   ]);

//   const handleAppointment = (id, status) => {
//     setAppointments((previous) =>
//       previous.map((appointment) =>
//         appointment.id === id
//           ? { ...appointment, status }
//           : appointment
//       )
//     );
//   };

//   const pendingCount = appointments.filter(
//     (appointment) => appointment.status === 'Pending'
//   ).length;

//   const acceptedCount = appointments.filter(
//     (appointment) => appointment.status === 'Accepted'
//   ).length;

//   const menuItems = [
//   { name: 'Dashboard', icon: FiGrid, href: '/doctor-dashboard' },
//   { name: 'Appointments', icon: FiCalendar, href: '/doctor-dashboard/appointments' },
//   { name: 'Availability', icon: FiClock, href: '/doctor-dashboard/availability' },
//   { name: 'My Profile', icon: FiUser, href: '/doctor-dashboard/profile' },
// ];

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800">

//       {/* Mobile overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
//           menuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
//           <a href="/" className="flex items-center gap-2">
//             <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
//               <FiHeart size={23} />
//             </span>

//             <span className="text-2xl font-bold text-slate-900">
//               Care<span className="text-teal-600">Bridge</span>
//             </span>
//           </a>

//           <button
//             type="button"
//             onClick={() => setMenuOpen(false)}
//             className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
//             aria-label="Close menu"
//           >
//             <FiX size={22} />
//           </button>
//         </div>

//         {/* Doctor profile summary */}
//         <div className="mx-4 mt-6 flex items-center gap-3 rounded-xl bg-teal-50 p-4">
//           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 font-bold text-white">
//             D
//           </div>

//           <div>
//             <p className="text-sm font-semibold text-slate-800">
//               Doctor Account
//             </p>
//             <p className="mt-1 text-xs text-slate-500">
//               Healthcare Professional
//             </p>
//           </div>
//         </div>

//         {/* Sidebar menu */}
//         <div className="flex-1 overflow-y-auto px-4 py-7">
//           <p className="mb-4 px-3 text-xs font-bold tracking-widest text-slate-400 uppercase">
//             Doctor Menu
//           </p>

//           <nav className="space-y-2">
//             {menuItems.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setMenuOpen(false)}
//                   className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
//                     index === 0
//                       ? 'bg-teal-50 text-teal-700'
//                       : 'text-slate-600 hover:bg-slate-50 hover:text-teal-700'
//                   }`}
//                 >
//                   <Icon size={19} />
//                   {item.name}
//                 </a>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Sidebar bottom */}
//         <div className="border-t border-slate-100 p-4">
//          <a
//   href="/doctor-dashboard/settings"
//   className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
//   onClick={() => setMenuOpen(false)}
// >
//   <FiSettings size={19} />
//   Settings
// </a>
//           <a
//             href="/login"
//             className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
//           >
//             <FiLogOut size={19} />
//             Logout
//           </a>
//         </div>
//       </aside>

//       {/* Main content */}
//       <div className="min-h-screen lg:ml-72">

//         {/* Topbar */}
//         <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-8">
//           <div className="flex items-center gap-3">
//             <button
//               type="button"
//               onClick={() => setMenuOpen(true)}
//               className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
//               aria-label="Open menu"
//             >
//               <FiMenu size={23} />
//             </button>

//             <div>
//               <h1 className="text-lg font-bold text-slate-900">
//                 Doctor Dashboard
//               </h1>
//               <p className="hidden text-xs text-slate-500 sm:block">
//                 Manage your appointments and availability
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button
//               type="button"
//               className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
//               aria-label="Notifications"
//             >
//               <FiBell size={19} />
//               {pendingCount > 0 && (
//                 <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
//               )}
//             </button>

//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
//               D
//             </div>
//           </div>
//         </header>

//         {/* Dashboard body */}
//         <main
//           id="doctor-dashboard"
//           className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8"
//         >

//           {/* Welcome banner */}
//           <section className="relative overflow-hidden rounded-3xl bg-teal-700 p-7 text-white sm:p-10">
//             <div className="relative z-10 max-w-2xl">
//               <p className="text-sm font-semibold text-teal-100">
//                 DOCTOR WORKSPACE
//               </p>

//               <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
//                 Welcome to your
//                 <span className="block text-teal-200">
//                   Doctor Dashboard!
//                 </span>
//               </h2>

//               <p className="mt-4 max-w-xl text-sm leading-7 text-teal-50 sm:text-base">
//                 Manage patient appointment requests, update your availability
//                 and keep track of your consultation schedule.
//               </p>

//               <a
//                 href="#appointments"
//                 className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
//               >
//                 View Appointments
//                 <FiArrowRight />
//               </a>
//             </div>

//             <div className="pointer-events-none absolute -right-12 -bottom-28 h-80 w-80 rounded-full border-[35px] border-white/10" />
//           </section>

//           {/* Statistics */}
//           <section>
//             <div className="mb-5">
//               <h2 className="text-xl font-bold text-slate-900">
//                 Appointment Overview
//               </h2>
//               <p className="mt-1 text-sm text-slate-500">
//                 A quick overview of your appointment activity.
//               </p>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               {[
//                 {
//                   title: 'Total Requests',
//                   value: appointments.length,
//                   label: 'Sample appointment requests',
//                   icon: FiCalendar,
//                   color: 'bg-blue-50 text-blue-700',
//                 },
//                 {
//                   title: 'Pending Requests',
//                   value: pendingCount,
//                   label: 'Awaiting your response',
//                   icon: FiClock,
//                   color: 'bg-amber-50 text-amber-700',
//                 },
//                 {
//                   title: 'Accepted',
//                   value: acceptedCount,
//                   label: 'Accepted appointments',
//                   icon: FiCheck,
//                   color: 'bg-teal-50 text-teal-700',
//                 },
//                 {
//                   title: 'Availability',
//                   value: isAvailable ? 'Online' : 'Offline',
//                   label: 'Your current availability',
//                   icon: FiActivity,
//                   color: 'bg-violet-50 text-violet-700',
//                 },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
//                   >
//                     <div className="flex items-center justify-between gap-2">
//                       <div>
//                         <p className="text-sm font-medium text-slate-500">
//                           {item.title}
//                         </p>

//                         <p className="mt-3 text-3xl font-bold text-slate-900">
//                           {item.value}
//                         </p>
//                       </div>

//                       <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
//                         <Icon size={23} />
//                       </div>
//                     </div>

//                     <p className="mt-3 text-xs text-slate-500">
//                       {item.label}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </section>

//           {/* Availability */}
//           <section
//             id="availability"
//             className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
//           >
//             <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   Manage Availability
//                 </h2>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">
//                   Control whether patients can request appointments with you.
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span
//                   className={`text-sm font-semibold ${
//                     isAvailable ? 'text-teal-700' : 'text-slate-500'
//                   }`}
//                 >
//                   {isAvailable ? 'Available' : 'Unavailable'}
//                 </span>

//                 <button
//                   type="button"
//                   role="switch"
//                   aria-checked={isAvailable}
//                   onClick={() => setIsAvailable(!isAvailable)}
//                   className={`relative h-7 w-12 rounded-full transition ${
//                     isAvailable ? 'bg-teal-600' : 'bg-slate-300'
//                   }`}
//                   aria-label="Toggle doctor availability"
//                 >
//                   <span
//                     className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
//                       isAvailable ? 'left-6' : 'left-1'
//                     }`}
//                   />
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Appointment Requests */}
//           <section
//             id="appointments"
//             className="scroll-mt-24"
//           >
//             <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
//               <div>
//                 <h2 className="text-xl font-bold text-slate-900">
//                   Appointment Requests
//                 </h2>
//                 <p className="mt-1 text-sm text-slate-500">
//                   Review and respond to patient appointment requests.
//                 </p>
//               </div>

//               <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
//                 {pendingCount} Pending
//               </span>
//             </div>

//             <div className="space-y-4">
//               {appointments.map((appointment) => (
//                 <article
//                   key={appointment.id}
//                   className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
//                 >
//                   <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
//                     <div className="flex items-start gap-4">
//                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
//                         <FiUser size={23} />
//                       </div>

//                       <div>
//                         <h3 className="font-bold text-slate-900">
//                           {appointment.patient}
//                         </h3>

//                         <p className="mt-1 text-sm text-slate-500">
//                           {appointment.reason}
//                         </p>

//                         <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
//                           <span className="flex items-center gap-1.5">
//                             <FiCalendar />
//                             {appointment.date}
//                           </span>

//                           <span className="flex items-center gap-1.5">
//                             <FiClock />
//                             {appointment.time}
//                           </span>

//                           <span className="flex items-center gap-1.5">
//                             {appointment.type === 'Online' ? (
//                               <FiVideo />
//                             ) : (
//                               <FiMapPin />
//                             )}
//                             {appointment.type}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap items-center gap-2">
//                       <span
//                         className={`mr-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
//                           appointment.status === 'Accepted'
//                             ? 'bg-teal-50 text-teal-700'
//                             : appointment.status === 'Rejected'
//                               ? 'bg-red-50 text-red-700'
//                               : 'bg-amber-50 text-amber-700'
//                         }`}
//                       >
//                         {appointment.status}
//                       </span>

//                       {appointment.status === 'Pending' && (
//                         <>
//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleAppointment(appointment.id, 'Accepted')
//                             }
//                             className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
//                           >
//                             <FiCheck />
//                             Accept
//                           </button>

//                           <button
//                             type="button"
//                             onClick={() =>
//                               handleAppointment(appointment.id, 'Rejected')
//                             }
//                             className="flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
//                           >
//                             <FiXCircle />
//                             Reject
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </article>
//               ))}

//               {appointments.length === 0 && (
//                 <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
//                   <FiCalendar className="mx-auto text-slate-400" size={30} />
//                   <p className="mt-3 font-semibold text-slate-700">
//                     No appointment requests
//                   </p>
//                   <p className="mt-2 text-sm text-slate-500">
//                     New patient requests will appear here.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* Doctor profile */}
//           <section
//             id="profile"
//             className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
//           >
//             <div className="flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
//                 <FiUser size={22} />
//               </div>

//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   My Doctor Profile
//                 </h2>
//                 <p className="mt-1 text-sm text-slate-500">
//                   Your professional information.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6 grid gap-5 sm:grid-cols-2">
//               <div>
//                 <p className="text-xs text-slate-500">Doctor Name</p>
//                 <p className="mt-1 font-semibold text-slate-800">
//                   Doctor Name
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-slate-500">Specialty</p>
//                 <p className="mt-1 font-semibold text-slate-800">
//                   Not added yet
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-slate-500">Email Address</p>
//                 <p className="mt-1 font-semibold text-slate-800">
//                   Not added yet
//                 </p>
//               </div>

//               <div>
//                 <p className="text-xs text-slate-500">Verification Status</p>
//                 <span className="mt-1 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
//                   Pending Verification
//                 </span>
//               </div>
//             </div>

//             <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-500">
//               Doctor profile details will be loaded from the backend after
//               authentication and admin verification are implemented.
//             </p>
//           </section>

//           {/* Footer */}
//           <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
//             © {new Date().getFullYear()} CareBridge. Your health, our care.
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default DoctorDashboard;





import { useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";

import {
  FiHeart,
  FiGrid,
  FiCalendar,
  FiClock,
  FiCheck,
  FiXCircle,
  FiUser,
  FiMenu,
  FiX,
  FiBell,
  FiSettings,
  FiLogOut,
  FiVideo,
  FiMapPin,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";

function DoctorDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const location = useLocation();

  const isDashboardHome =
    location.pathname === "/doctor-dashboard" ||
    location.pathname === "/doctor-dashboard/";

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Anjali Kumar",
      reason: "General consultation",
      date: "30 Oct 2026",
      time: "10:00 AM",
      type: "Online",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Rahul Menon",
      reason: "Follow-up consultation",
      date: "30 Oct 2026",
      time: "11:30 AM",
      type: "Hospital Visit",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Meera Thomas",
      reason: "Health consultation",
      date: "31 Oct 2026",
      time: "02:00 PM",
      type: "Online",
      status: "Pending",
    },
  ]);

  const handleAppointment = (id, status) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  const pendingCount = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;

  const acceptedCount = appointments.filter(
    (appointment) => appointment.status === "Accepted"
  ).length;

  const menuItems = [
    {
      name: "Dashboard",
      icon: FiGrid,
      href: "/doctor-dashboard",
    },
    {
      name: "Appointments",
      icon: FiCalendar,
      href: "/doctor-dashboard/appointments",
    },
    {
      name: "Availability",
      icon: FiClock,
      href: "/doctor-dashboard/availability",
    },
    {
      name: "My Profile",
      icon: FiUser,
      href: "/doctor-dashboard/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Logo */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
              <FiHeart size={23} />
            </span>

            <span className="text-2xl font-bold text-slate-900">
              Care<span className="text-teal-600">Bridge</span>
            </span>
          </NavLink>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Doctor Information */}
        <div className="mx-4 mt-6 flex items-center gap-3 rounded-xl bg-teal-50 p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 font-bold text-white">
            D
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Doctor Account
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Healthcare Professional
            </p>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-7">
          <p className="mb-4 px-3 text-xs font-bold tracking-widest text-slate-400 uppercase">
            Doctor Menu
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/doctor-dashboard"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-teal-50 text-teal-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                    }`
                  }
                >
                  <Icon size={19} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom */}
        <div className="border-t border-slate-100 p-4">

          <NavLink
            to="/doctor-dashboard/settings"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                isActive
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            <FiSettings size={19} />
            Settings
          </NavLink>

          <NavLink
            to="/login"
            className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <FiLogOut size={19} />
            Logout
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <div className="min-h-screen lg:ml-72">

        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-8">

          <div className="flex items-center gap-3">

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <FiMenu size={23} />
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Doctor Dashboard
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                Manage your appointments and availability
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">

            <button
              type="button"
              className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
              aria-label="Notifications"
            >
              <FiBell size={19} />

              {pendingCount > 0 && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
              )}
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
              D
            </div>

          </div>
        </header>

        {/* Page Content */}
        {isDashboardHome ? (

          /* Dashboard Home */
          <main
            id="doctor-dashboard"
            className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8"
          >

            {/* Welcome Banner */}
            <section className="relative overflow-hidden rounded-3xl bg-teal-700 p-7 text-white sm:p-10">

              <div className="relative z-10 max-w-2xl">

                <p className="text-sm font-semibold text-teal-100">
                  DOCTOR WORKSPACE
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Welcome to your
                  <span className="block text-teal-200">
                    Doctor Dashboard!
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-teal-50 sm:text-base">
                  Manage patient appointment requests, update your availability
                  and keep track of your consultation schedule.
                </p>

                <NavLink
                  to="/doctor-dashboard/appointments"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
                >
                  View Appointments
                  <FiArrowRight />
                </NavLink>

              </div>

              <div className="pointer-events-none absolute -right-12 -bottom-28 h-80 w-80 rounded-full border-[35px] border-white/10" />

            </section>

            {/* Statistics */}
            <section>

              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-900">
                  Appointment Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  A quick overview of your appointment activity.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                {[
                  {
                    title: "Total Requests",
                    value: appointments.length,
                    label: "Sample appointment requests",
                    icon: FiCalendar,
                    color: "bg-blue-50 text-blue-700",
                  },
                  {
                    title: "Pending Requests",
                    value: pendingCount,
                    label: "Awaiting your response",
                    icon: FiClock,
                    color: "bg-amber-50 text-amber-700",
                  },
                  {
                    title: "Accepted",
                    value: acceptedCount,
                    label: "Accepted appointments",
                    icon: FiCheck,
                    color: "bg-teal-50 text-teal-700",
                  },
                  {
                    title: "Availability",
                    value: isAvailable ? "Online" : "Offline",
                    label: "Your current availability",
                    icon: FiActivity,
                    color: "bg-violet-50 text-violet-700",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2">

                        <div>
                          <p className="text-sm font-medium text-slate-500">
                            {item.title}
                          </p>

                          <p className="mt-3 text-3xl font-bold text-slate-900">
                            {item.value}
                          </p>
                        </div>

                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                          <Icon size={23} />
                        </div>

                      </div>

                      <p className="mt-3 text-xs text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  );
                })}

              </div>
            </section>

            {/* Availability */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Manage Availability
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Control whether patients can request appointments with you.
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <span
                    className={`text-sm font-semibold ${
                      isAvailable ? "text-teal-700" : "text-slate-500"
                    }`}
                  >
                    {isAvailable ? "Available" : "Unavailable"}
                  </span>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={isAvailable}
                    onClick={() => setIsAvailable(!isAvailable)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      isAvailable ? "bg-teal-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                        isAvailable ? "left-6" : "left-1"
                      }`}
                    />
                  </button>

                </div>
              </div>
            </section>

            {/* Appointment Requests */}
            <section>

              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Appointment Requests
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Review and respond to patient appointment requests.
                  </p>
                </div>

                <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                  {pendingCount} Pending
                </span>

              </div>

              <div className="space-y-4">

                {appointments.map((appointment) => (

                  <article
                    key={appointment.id}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
                  >

                    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                          <FiUser size={23} />
                        </div>

                        <div>

                          <h3 className="font-bold text-slate-900">
                            {appointment.patient}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            {appointment.reason}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">

                            <span className="flex items-center gap-1.5">
                              <FiCalendar />
                              {appointment.date}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <FiClock />
                              {appointment.time}
                            </span>

                            <span className="flex items-center gap-1.5">
                              {appointment.type === "Online" ? (
                                <FiVideo />
                              ) : (
                                <FiMapPin />
                              )}
                              {appointment.type}
                            </span>

                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">

                        <span
                          className={`mr-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                            appointment.status === "Accepted"
                              ? "bg-teal-50 text-teal-700"
                              : appointment.status === "Rejected"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {appointment.status}
                        </span>

                        {appointment.status === "Pending" && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                handleAppointment(appointment.id, "Accepted")
                              }
                              className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                            >
                              <FiCheck />
                              Accept
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleAppointment(appointment.id, "Rejected")
                              }
                              className="flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                            >
                              <FiXCircle />
                              Reject
                            </button>
                          </>
                        )}

                      </div>
                    </div>
                  </article>

                ))}

                {appointments.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
                    <FiCalendar className="mx-auto text-slate-400" size={30} />

                    <p className="mt-3 font-semibold text-slate-700">
                      No appointment requests
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      New patient requests will appear here.
                    </p>
                  </div>
                )}

              </div>
            </section>

            {/* Doctor Profile Summary */}
            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <FiUser size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    My Doctor Profile
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your professional information.
                  </p>
                </div>

              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div>
                  <p className="text-xs text-slate-500">Doctor Name</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Doctor Name
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Specialty</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Not added yet
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email Address</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Not added yet
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Verification Status</p>
                  <span className="mt-1 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    Pending Verification
                  </span>
                </div>

              </div>

              <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-500">
                Doctor profile details will be loaded from the backend after
                authentication and admin verification are implemented.
              </p>

            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} CareBridge. Your health, our care.
            </footer>

          </main>

        ) : (

          /* Other Pages */
          <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <Outlet />
          </main>

        )}

      </div>
    </div>
  );
}

export default DoctorDashboard;
