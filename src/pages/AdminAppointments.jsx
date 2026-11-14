
import { useState } from "react";
import {
  FiSearch,
  FiCalendar,
  FiEye,
  FiX,
  FiUser,
  FiClock,
} from "react-icons/fi";

const appointmentsData = [
  {
    id: 1,
    patient: "Anu Thomas",
    doctor: "Dr. Rahul Menon",
    specialty: "General Physician",
    date: "2026-11-02",
    time: "10:30 AM",
    status: "Upcoming",
  },
  {
    id: 2,
    patient: "Meera Joseph",
    doctor: "Dr. Anjali Nair",
    specialty: "Dermatologist",
    date: "2026-10-28",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    id: 3,
    patient: "Arun Kumar",
    doctor: "Dr. Rahul Menon",
    specialty: "General Physician",
    date: "2026-10-27",
    time: "02:00 PM",
    status: "Cancelled",
  },
  {
    id: 4,
    patient: "Sneha Mathew",
    doctor: "Dr. Priya Das",
    specialty: "Psychologist",
    date: "2026-11-04",
    time: "04:00 PM",
    status: "Upcoming",
  },
];

function AdminAppointments() {
  const [appointments] = useState(appointmentsData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.patient.toLowerCase().includes(search.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || appointment.status === filter;

    return matchesSearch && matchesFilter;
  });

  const statusStyle = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Appointments
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage patient appointments.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
          <FiCalendar className="text-blue-600" size={20} />
          <span className="text-sm font-medium text-gray-600">
            Total: {appointments.length} Appointments
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Appointments</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {appointments.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Upcoming</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            {appointments.filter((item) => item.status === "Upcoming").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {appointments.filter((item) => item.status === "Completed").length}
          </h2>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patient or doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Upcoming", "Completed", "Cancelled"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Patient</th>
                <th className="px-5 py-4">Doctor</th>
                <th className="px-5 py-4">Date & Time</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-gray-800">
                        {appointment.patient}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        ID: #{appointment.id}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-gray-800">
                        {appointment.doctor}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {appointment.specialty}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-gray-700">
                        {appointment.date}
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        <FiClock size={12} />
                        {appointment.time}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                          appointment.status
                        )}`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedAppointment(appointment)}
                        className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                      >
                        <FiEye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-5 py-10 text-center text-gray-500"
                  >
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                Appointment Details
              </h2>

              <button
                onClick={() => setSelectedAppointment(null)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiUser className="text-blue-600" size={20} />
                <div>
                  <p className="text-xs text-gray-500">Patient</p>
                  <p className="font-medium text-gray-800">
                    {selectedAppointment.patient}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500">Doctor</p>
                <p className="font-medium text-gray-800">
                  {selectedAppointment.doctor}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Specialty</p>
                <p className="font-medium text-gray-800">
                  {selectedAppointment.specialty}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Date and Time</p>
                <p className="font-medium text-gray-800">
                  {selectedAppointment.date} at {selectedAppointment.time}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Status</p>
                <span
                  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                    selectedAppointment.status
                  )}`}
                >
                  {selectedAppointment.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedAppointment(null)}
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminAppointments;
