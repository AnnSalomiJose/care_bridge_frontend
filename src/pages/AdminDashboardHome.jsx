
import { useState } from "react";
import {
  FiUsers,
  FiUserCheck,
  FiCalendar,
  FiShoppingBag,
  FiPackage,
  FiCreditCard,
  FiSettings,
  FiActivity,
  FiClock,
  FiCheck,
  FiXCircle,
  FiShield,
  FiHeart,
  FiArrowUpRight,
} from "react-icons/fi";

function AdminDashboardHome() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Thomas",
      specialty: "Cardiologist",
      email: "sarah@example.com",
      status: "Pending",
    },
    {
      id: 2,
      name: "Dr. John Mathew",
      specialty: "Dermatologist",
      email: "john@example.com",
      status: "Pending",
    },
    {
      id: 3,
      name: "Dr. Anu Maria",
      specialty: "Psychologist",
      email: "anu@example.com",
      status: "Pending",
    },
  ]);

  const handleDoctorStatus = (id, status) => {
    setDoctors((previous) =>
      previous.map((doctor) =>
        doctor.id === id ? { ...doctor, status } : doctor
      )
    );
  };

  const statistics = [
    {
      title: "Total Users",
      value: "1,250",
      detail: "Registered users",
      icon: FiUsers,
      color: "bg-blue-50 text-blue-700",
    },
    {
      title: "Total Doctors",
      value: "85",
      detail: "Registered doctors",
      icon: FiUserCheck,
      color: "bg-teal-50 text-teal-700",
    },
    {
      title: "Appointments",
      value: "320",
      detail: "Total bookings",
      icon: FiCalendar,
      color: "bg-violet-50 text-violet-700",
    },
    {
      title: "Product Orders",
      value: "156",
      detail: "Total orders",
      icon: FiShoppingBag,
      color: "bg-amber-50 text-amber-700",
    },
  ];

  const managementCards = [
    {
      title: "User Management",
      description: "View and manage registered users.",
      icon: FiUsers,
      color: "bg-blue-50 text-blue-700",
      id: "users",
    },
    {
      title: "Doctor Management",
      description: "Review and manage doctor registrations.",
      icon: FiUserCheck,
      color: "bg-teal-50 text-teal-700",
      id: "doctors",
    },
    {
      title: "Appointments",
      description: "Monitor patient appointment bookings.",
      icon: FiCalendar,
      color: "bg-violet-50 text-violet-700",
      id: "appointments",
    },
    {
      title: "Product Management",
      description: "Manage medical store products.",
      icon: FiPackage,
      color: "bg-amber-50 text-amber-700",
      id: "products",
    },
    {
      title: "Order Management",
      description: "Review and manage customer orders.",
      icon: FiShoppingBag,
      color: "bg-emerald-50 text-emerald-700",
      id: "orders",
    },
    {
      title: "Payment Management",
      description: "Review payment records and transactions.",
      icon: FiCreditCard,
      color: "bg-rose-50 text-rose-700",
      id: "payments",
    },
    {
      title: "System Settings",
      description: "Manage platform settings and preferences.",
      icon: FiSettings,
      color: "bg-slate-100 text-slate-700",
      id: "settings",
    },
  ];

  const pendingCount = doctors.filter(
    (doctor) => doctor.status === "Pending"
  ).length;

  return (
    <main
      id="admin-dashboard"
      className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8"
    >
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 p-7 text-white sm:p-10">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-teal-300">
            <FiShield />
            ADMINISTRATOR PANEL
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Welcome to
            <span className="block text-teal-300">
              CareBridge Admin
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Manage users, verify doctors, monitor appointments and
            oversee healthcare products and orders from one place.
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-28 -right-12 h-80 w-80 rounded-full border-[35px] border-white/5" />

        <div className="pointer-events-none absolute right-24 top-5 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
      </section>

      {/* Platform Statistics */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900">
            Platform Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Summary of CareBridge activities.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {item.title}
                    </p>

                    <p className="mt-3 text-3xl font-bold text-slate-900">
                      {item.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={23} />
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Doctor Verification */}
      <section id="doctors" className="scroll-mt-24">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Doctor Verification
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Review sample doctor registration requests.
            </p>
          </div>

          <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            {pendingCount} Pending
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">
                    Doctor
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Specialty
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Email
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {doctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {doctor.name}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.specialty}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {doctor.email}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          doctor.status === "Approved"
                            ? "bg-teal-50 text-teal-700"
                            : doctor.status === "Rejected"
                            ? "bg-red-50 text-red-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {doctor.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {doctor.status === "Pending" ? (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleDoctorStatus(
                                doctor.id,
                                "Approved"
                              )
                            }
                            className="rounded-lg bg-teal-50 p-2 text-teal-700 hover:bg-teal-100"
                            title="Approve doctor"
                          >
                            <FiCheck size={17} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDoctorStatus(
                                doctor.id,
                                "Rejected"
                              )
                            }
                            className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                            title="Reject doctor"
                          >
                            <FiXCircle size={17} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500">
                          Reviewed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Management Cards */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900">
            Manage Platform
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overview of the main management sections.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {managementCards.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={`#${item.id}`}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={24} />
                  </div>

                  <FiArrowUpRight className="text-slate-400 transition group-hover:text-teal-700" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Recent Activity */}
      <section
        id="appointments"
        className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <FiActivity size={22} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Platform activity summary.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
          <FiClock className="mt-1 text-slate-500" />

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Dashboard Preview
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Real user registrations, appointment updates, product
              orders and payment activity will appear here after
              backend integration.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CareBridge Admin. All rights reserved.
      </footer>
    </main>
  );
}

export default AdminDashboardHome;
