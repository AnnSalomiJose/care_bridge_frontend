
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiVideo,
  FiMapPin,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiEye,
  FiX,
  FiPlus,
  FiClipboard,
  FiArrowRight,
} from "react-icons/fi";

const initialAppointments = [
  {
    id: 1,
    doctor: "Dr. Anil Kumar",
    specialty: "General Physician",
    date: "2026-11-05",
    time: "10:30 AM",
    mode: "Online Consultation",
    status: "Upcoming",
    location: "Video Consultation",
    reason: "Regular health checkup",
    fee: 500,
  },
  {
    id: 2,
    doctor: "Dr. Meera Nair",
    specialty: "Dermatologist",
    date: "2026-11-10",
    time: "02:00 PM",
    mode: "Hospital Consultation",
    status: "Upcoming",
    location: "Care Medical Centre",
    reason: "Skin-related concern",
    fee: 700,
  },
  {
    id: 3,
    doctor: "Dr. Rahul Menon",
    specialty: "Cardiologist",
    date: "2026-10-15",
    time: "11:00 AM",
    mode: "Hospital Consultation",
    status: "Completed",
    location: "City Hospital",
    reason: "Heart health consultation",
    fee: 800,
  },
  {
    id: 4,
    doctor: "Dr. Priya Thomas",
    specialty: "General Physician",
    date: "2026-10-20",
    time: "04:00 PM",
    mode: "Online Consultation",
    status: "Cancelled",
    location: "Video Consultation",
    reason: "Fever and body pain",
    fee: 500,
  },
];

function UserAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const tabs = [
    "All",
    "Upcoming",
    "Completed",
    "Cancelled",
  ];

  const filteredAppointments =
    activeTab === "All"
      ? appointments
      : appointments.filter(
          (appointment) => appointment.status === activeTab
        );

  const upcomingCount = appointments.filter(
    (item) => item.status === "Upcoming"
  ).length;

  const completedCount = appointments.filter(
    (item) => item.status === "Completed"
  ).length;

  const cancelledCount = appointments.filter(
    (item) => item.status === "Cancelled"
  ).length;

  const handleCancel = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmed) return;

    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Cancelled" }
          : appointment
      )
    );

    setSelectedAppointment(null);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-50 text-blue-700";

      case "Completed":
        return "bg-green-50 text-green-700";

      case "Cancelled":
        return "bg-red-50 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const formatDate = (date) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">

      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Heading */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Patient Dashboard
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                My Appointments
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Manage your doctor consultations and appointment history.
              </p>
            </div>

            <Link
              to="/user-dashboard/doctors"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              <FiPlus />
              Book New Appointment
            </Link>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Total Appointments
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {appointments.length}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <FiCalendar size={23} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Upcoming
                </p>

                <h2 className="mt-2 text-3xl font-bold text-blue-700">
                  {upcomingCount}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <FiClock size={23} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Completed
                </p>

                <h2 className="mt-2 text-3xl font-bold text-green-700">
                  {completedCount}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <FiCheckCircle size={23} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Cancelled
                </p>

                <h2 className="mt-2 text-3xl font-bold text-red-600">
                  {cancelledCount}
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <FiXCircle size={23} />
              </div>
            </div>
          </div>
        </section>

        {/* Appointment List */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Appointment History
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                View and manage your consultations.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-100 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-teal-600 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {tab}
                {tab === "Upcoming" && ` (${upcomingCount})`}
                {tab === "Completed" && ` (${completedCount})`}
                {tab === "Cancelled" && ` (${cancelledCount})`}
              </button>
            ))}
          </div>

          {/* Appointment Cards */}
          <div className="mt-6 space-y-5">

            {filteredAppointments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 px-5 py-12 text-center">
                <FiCalendar
                  size={35}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-4 font-bold text-slate-800">
                  No {activeTab} appointments
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Your appointments will appear here.
                </p>

                <Link
                  to="/user-dashboard/doctors"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  Find Doctors
                  <FiArrowRight />
                </Link>
              </div>
            ) : (
              filteredAppointments.map((appointment) => (
                <article
                  key={appointment.id}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-teal-200 hover:shadow-sm"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    {/* Doctor Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                      <FiUser size={30} />
                    </div>

                    {/* Doctor Information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-slate-900">
                          {appointment.doctor}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            appointment.status
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-medium text-teal-700">
                        {appointment.specialty}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar />
                          {formatDate(appointment.date)}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FiClock />
                          {appointment.time}
                        </span>

                        <span className="flex items-center gap-1.5">
                          {appointment.mode === "Online Consultation" ? (
                            <FiVideo />
                          ) : (
                            <FiMapPin />
                          )}
                          {appointment.mode}
                        </span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                      <div>
                        <p className="text-xs text-slate-500">
                          Consultation Fee
                        </p>

                        <p className="mt-1 text-lg font-bold text-slate-900">
                          ₹{appointment.fee}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedAppointment(appointment)
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                          <FiEye />
                          Details
                        </button>

                        {appointment.status === "Upcoming" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleCancel(appointment.id)
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                          >
                            <FiX />
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Booking Help */}
        <section className="rounded-2xl bg-teal-700 p-6 text-white sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">
                Need to consult a doctor?
              </h2>

              <p className="mt-2 text-sm leading-6 text-teal-100">
                Explore doctors and book your next healthcare appointment.
              </p>
            </div>

            <Link
              to="/user-dashboard/doctors"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-teal-800 hover:bg-teal-50"
            >
              Book Appointment
              <FiArrowRight />
            </Link>
          </div>
        </section>

        <p className="text-center text-xs leading-5 text-slate-400">
          Demo appointment data is used for this frontend preview.
          Actual appointment records will be connected later.
        </p>

      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4"
          onClick={() => setSelectedAppointment(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-modal-title"
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2
                id="appointment-modal-title"
                className="text-xl font-bold text-slate-900"
              >
                Appointment Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close"
              >
                <FiX size={21} />
              </button>
            </div>

            <div className="mt-6 space-y-4">

              <div>
                <p className="text-xs text-slate-500">
                  Doctor
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {selectedAppointment.doctor}
                </p>

                <p className="text-sm text-teal-700">
                  {selectedAppointment.specialty}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500">
                    Appointment Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatDate(selectedAppointment.date)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Appointment Time
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedAppointment.time}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Consultation Type
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedAppointment.mode}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Consultation Fee
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    ₹{selectedAppointment.fee}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Location / Consultation
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {selectedAppointment.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Reason for Visit
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  {selectedAppointment.reason}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Appointment Status
                </p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                    selectedAppointment.status
                  )}`}
                >
                  {selectedAppointment.status}
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {selectedAppointment.status === "Upcoming" && (
                <button
                  type="button"
                  onClick={() =>
                    handleCancel(selectedAppointment.id)
                  }
                  className="flex-1 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  Cancel Appointment
                </button>
              )}

              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
                className="flex-1 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default UserAppointments;
