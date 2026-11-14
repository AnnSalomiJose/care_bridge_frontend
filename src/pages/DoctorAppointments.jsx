
import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiVideo,
  FiMapPin,
  FiCheck,
  FiX,
  FiSearch,
  FiFilter,
  FiEye,
  FiPhone,
} from "react-icons/fi";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Anjali Kumar",
      email: "anjali@gmail.com",
      phone: "+91 9876543210",
      age: 26,
      gender: "Female",
      reason: "General health consultation",
      date: "2026-11-10",
      time: "10:00 AM",
      type: "Online",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Rahul Menon",
      email: "rahul@gmail.com",
      phone: "+91 9876543211",
      age: 32,
      gender: "Male",
      reason: "Follow-up consultation",
      date: "2026-11-10",
      time: "11:30 AM",
      type: "Hospital Visit",
      status: "Accepted",
    },
    {
      id: 3,
      patient: "Meera Thomas",
      email: "meera@gmail.com",
      phone: "+91 9876543212",
      age: 29,
      gender: "Female",
      reason: "Headache and migraine",
      date: "2026-11-11",
      time: "02:00 PM",
      type: "Online",
      status: "Pending",
    },
    {
      id: 4,
      patient: "Arjun Nair",
      email: "arjun@gmail.com",
      phone: "+91 9876543213",
      age: 35,
      gender: "Male",
      reason: "Regular health checkup",
      date: "2026-11-12",
      time: "09:30 AM",
      type: "Hospital Visit",
      status: "Rejected",
    },
    {
      id: 5,
      patient: "Diya Joseph",
      email: "diya@gmail.com",
      phone: "+91 9876543214",
      age: 24,
      gender: "Female",
      reason: "Skin allergy consultation",
      date: "2026-11-13",
      time: "04:00 PM",
      type: "Online",
      status: "Accepted",
    },
  ]);

  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleStatus = (id, status) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status }
          : appointment
      )
    );
  };

  const tabs = ["All", "Pending", "Accepted", "Rejected"];

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesTab =
      activeTab === "All" || appointment.status === activeTab;

    const matchesSearch =
      appointment.patient.toLowerCase().includes(search.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const totalCount = appointments.length;
  const pendingCount = appointments.filter(
    (item) => item.status === "Pending"
  ).length;
  const acceptedCount = appointments.filter(
    (item) => item.status === "Accepted"
  ).length;
  const rejectedCount = appointments.filter(
    (item) => item.status === "Rejected"
  ).length;

  const stats = [
    {
      title: "Total Appointments",
      value: totalCount,
      icon: FiCalendar,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Pending Requests",
      value: pendingCount,
      icon: FiClock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Accepted",
      value: acceptedCount,
      icon: FiCheck,
      color: "bg-teal-50 text-teal-600",
    },
    {
      title: "Rejected",
      value: rejectedCount,
      icon: FiX,
      color: "bg-red-50 text-red-600",
    },
  ];

  const formatDate = (date) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-7">

      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Appointments
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage and respond to your patient appointment requests.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-teal-50 px-4 py-3 text-sm font-medium text-teal-700">
          <FiCalendar size={18} />
          Appointment Management
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>
                </div>

                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                  <Icon size={23} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Appointment List */}
      <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">

        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Patient Appointment Requests
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              View patient details and manage appointment status.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-xs">
            <FiSearch
              className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search patients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pr-4 pl-10 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-teal-600 text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab}
              <span className="ml-2">
                {tab === "All"
                  ? totalCount
                  : appointments.filter((item) => item.status === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Appointment Cards */}
        <div className="mt-5 space-y-4">

          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="rounded-2xl border border-slate-100 p-5 transition hover:border-teal-200 hover:shadow-sm"
            >
              <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">

                {/* Patient Information */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-50 text-lg font-bold text-teal-700">
                    {appointment.patient.charAt(0)}
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
                        {formatDate(appointment.date)}
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

                {/* Status and Actions */}
                <div className="flex flex-wrap items-center gap-2">

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      appointment.status === "Pending"
                        ? "bg-amber-50 text-amber-700"
                        : appointment.status === "Accepted"
                        ? "bg-teal-50 text-teal-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {appointment.status}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedAppointment(appointment)}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                  >
                    <FiEye />
                    View
                  </button>

                  {appointment.status === "Pending" && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleStatus(appointment.id, "Accepted")
                        }
                        className="flex items-center gap-2 rounded-lg bg-teal-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
                      >
                        <FiCheck />
                        Accept
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleStatus(appointment.id, "Rejected")
                        }
                        className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
                      >
                        <FiX />
                        Reject
                      </button>
                    </>
                  )}

                </div>
              </div>
            </div>
          ))}

          {filteredAppointments.length === 0 && (
            <div className="py-12 text-center">
              <FiFilter className="mx-auto text-slate-300" size={35} />
              <h3 className="mt-3 font-semibold text-slate-700">
                No appointments found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try another search or status filter.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/50 p-4"
          onClick={() => setSelectedAppointment(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Appointment Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-xl font-bold text-teal-700">
                {selectedAppointment.patient.charAt(0)}
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  {selectedAppointment.patient}
                </h3>
                <p className="text-sm text-slate-500">
                  {selectedAppointment.gender}, {selectedAppointment.age} years
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-xs text-slate-400">Email Address</p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {selectedAppointment.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Phone Number</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-800">
                  <FiPhone />
                  {selectedAppointment.phone}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Reason for Appointment</p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {selectedAppointment.reason}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400">Date</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {formatDate(selectedAppointment.date)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Time</p>
                  <p className="mt-1 text-sm font-medium text-slate-800">
                    {selectedAppointment.time}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400">Consultation Type</p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {selectedAppointment.type}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Appointment Status</p>
                <p className="mt-1 text-sm font-semibold text-teal-700">
                  {selectedAppointment.status}
                </p>
              </div>

            </div>

            {selectedAppointment.status === "Pending" && (
              <div className="mt-7 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    handleStatus(selectedAppointment.id, "Accepted");
                    setSelectedAppointment(null);
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  <FiCheck />
                  Accept
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleStatus(selectedAppointment.id, "Rejected");
                    setSelectedAppointment(null);
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  <FiX />
                  Reject
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default DoctorAppointments;
