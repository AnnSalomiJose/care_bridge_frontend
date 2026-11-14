
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiUserCheck,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiEye,
  FiCheck,
  FiX,
  FiMail,
  FiPhone,
  FiAward,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const initialDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Thomas",
    specialty: "Cardiologist",
    email: "sarah@example.com",
    phone: "9876543210",
    qualification: "MBBS, MD Cardiology",
    experience: "8 Years",
    fee: 700,
    location: "Kochi, Kerala",
    status: "Pending",
  },
  {
    id: 2,
    name: "Dr. John Mathew",
    specialty: "Dermatologist",
    email: "john@example.com",
    phone: "9876543211",
    qualification: "MBBS, MD Dermatology",
    experience: "6 Years",
    fee: 600,
    location: "Thrissur, Kerala",
    status: "Pending",
  },
  {
    id: 3,
    name: "Dr. Anu Maria",
    specialty: "Psychologist",
    email: "anu@example.com",
    phone: "9876543212",
    qualification: "MSc Psychology",
    experience: "5 Years",
    fee: 500,
    location: "Ernakulam, Kerala",
    status: "Approved",
  },
  {
    id: 4,
    name: "Dr. Rahul Menon",
    specialty: "General Physician",
    email: "rahul@example.com",
    phone: "9876543213",
    qualification: "MBBS, MD General Medicine",
    experience: "10 Years",
    fee: 500,
    location: "Kozhikode, Kerala",
    status: "Rejected",
  },
];

function AdminDoctors() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filters = ["All", "Pending", "Approved", "Rejected"];

  const counts = {
    All: doctors.length,
    Pending: doctors.filter((doctor) => doctor.status === "Pending").length,
    Approved: doctors.filter((doctor) => doctor.status === "Approved").length,
    Rejected: doctors.filter((doctor) => doctor.status === "Rejected").length,
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesFilter =
        activeFilter === "All" || doctor.status === activeFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.specialty.toLowerCase().includes(searchText) ||
        doctor.email.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [doctors, activeFilter, search]);

  const updateDoctorStatus = (id, status) => {
    setDoctors((previous) =>
      previous.map((doctor) =>
        doctor.id === id ? { ...doctor, status } : doctor
      )
    );

    setSelectedDoctor((previous) =>
      previous?.id === id ? { ...previous, status } : previous
    );
  };

  const statusStyle = (status) => {
    if (status === "Approved") {
      return "bg-green-50 text-green-700";
    }

    if (status === "Rejected") {
      return "bg-red-50 text-red-700";
    }

    return "bg-amber-50 text-amber-700";
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Heading */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Admin Management
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Manage Doctors
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Review doctor registrations and manage verification status.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filters.map((filter) => {
            const Icon =
              filter === "All"
                ? FiUserCheck
                : filter === "Pending"
                ? FiClock
                : filter === "Approved"
                ? FiCheckCircle
                : FiXCircle;

            const color =
              filter === "All"
                ? "bg-blue-50 text-blue-700"
                : filter === "Pending"
                ? "bg-amber-50 text-amber-700"
                : filter === "Approved"
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:shadow-md ${
                  activeFilter === filter
                    ? "border-teal-400 ring-2 ring-teal-100"
                    : "border-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {filter === "All" ? "Total Doctors" : filter}
                    </p>

                    <p className="mt-3 text-3xl font-bold text-slate-900">
                      {counts[filter]}
                    </p>
                  </div>

                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                    <Icon size={23} />
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        {/* Search and Filter */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by doctor name, specialty or email..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "bg-teal-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Table */}
        <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Doctor Registration Requests
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View doctor information and approve or reject requests.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Doctor</th>
                  <th className="px-6 py-4 font-semibold">Specialty</th>
                  <th className="px-6 py-4 font-semibold">Qualification</th>
                  <th className="px-6 py-4 font-semibold">Experience</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredDoctors.map((doctor) => (
                  <tr key={doctor.id} className="hover:bg-slate-50/70">

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 font-bold text-teal-700">
                          {doctor.name
                            .replace("Dr. ", "")
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {doctor.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {doctor.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.specialty}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.qualification}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.experience}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyle(doctor.status)}`}>
                        {doctor.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedDoctor(doctor)}
                          title="View details"
                          className="rounded-lg bg-blue-50 p-2 text-blue-700 hover:bg-blue-100"
                        >
                          <FiEye size={17} />
                        </button>

                        {doctor.status === "Pending" && (
                          <>
                            <button
                              type="button"
                              onClick={() =>
                                updateDoctorStatus(doctor.id, "Approved")
                              }
                              title="Approve doctor"
                              className="rounded-lg bg-green-50 p-2 text-green-700 hover:bg-green-100"
                            >
                              <FiCheck size={17} />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                updateDoctorStatus(doctor.id, "Rejected")
                              }
                              title="Reject doctor"
                              className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                            >
                              <FiXCircle size={17} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDoctors.length === 0 && (
            <div className="px-5 py-14 text-center">
              <FiSearch className="mx-auto text-3xl text-slate-300" />

              <h3 className="mt-3 font-semibold text-slate-800">
                No doctors found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search or select a different filter.
              </p>
            </div>
          )}
        </section>

        <p className="text-center text-xs text-slate-400">
          Sample doctor records are used for this frontend preview.
        </p>
      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="doctor-modal-title"
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2
                id="doctor-modal-title"
                className="text-xl font-bold text-slate-900"
              >
                Doctor Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <FiX size={21} />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-xl font-bold text-teal-700">
                {selectedDoctor.name
                  .replace("Dr. ", "")
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedDoctor.name}
                </h3>

                <p className="text-sm text-teal-700">
                  {selectedDoctor.specialty}
                </p>

                <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(selectedDoctor.status)}`}>
                  {selectedDoctor.status}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">

              <div className="flex items-start gap-3">
                <FiAward className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Qualification</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedDoctor.qualification}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedDoctor.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                    {selectedDoctor.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedDoctor.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedDoctor.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCalendar className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Consultation Fee</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    ₹{selectedDoctor.fee}
                  </p>
                </div>
              </div>
            </div>

            {selectedDoctor.status === "Pending" && (
              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    updateDoctorStatus(selectedDoctor.id, "Approved")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  <FiCheck />
                  Approve
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateDoctorStatus(selectedDoctor.id, "Rejected")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  <FiXCircle />
                  Reject
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default AdminDoctors;
