import { useState } from 'react';
import {
  FiGrid,
  FiUsers,
  FiUserCheck,
  FiCalendar,
  FiPackage,
  FiShoppingBag,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiBell,
  FiMenu,
  FiX,
  FiActivity,
  FiClock,
  FiCheck,
  FiXCircle,
  FiShield,
  FiHeart,
  FiArrowUpRight,
} from 'react-icons/fi';

function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Thomas',
      specialty: 'Cardiologist',
      email: 'sarah@example.com',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Dr. John Mathew',
      specialty: 'Dermatologist',
      email: 'john@example.com',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Dr. Anu Maria',
      specialty: 'Psychologist',
      email: 'anu@example.com',
      status: 'Pending',
    },
  ]);

  const handleDoctorStatus = (id, status) => {
    setDoctors((previous) =>
      previous.map((doctor) =>
        doctor.id === id ? { ...doctor, status } : doctor
      )
    );
  };

  const menuItems = [
    { name: 'Dashboard', icon: FiGrid, href: '#admin-dashboard' },
    { name: 'Users', icon: FiUsers, href: '#users' },
    { name: 'Doctors', icon: FiUserCheck, href: '#doctors' },
    { name: 'Appointments', icon: FiCalendar, href: '#appointments' },
    { name: 'Products', icon: FiPackage, href: '#products' },
    { name: 'Orders', icon: FiShoppingBag, href: '#orders' },
    { name: 'Payments', icon: FiCreditCard, href: '#payments' },
  ];

  const statistics = [
    {
      title: 'Total Users',
      value: '1,250',
      detail: 'Registered users',
      icon: FiUsers,
      color: 'bg-blue-50 text-blue-700',
    },
    {
      title: 'Total Doctors',
      value: '85',
      detail: 'Registered doctors',
      icon: FiUserCheck,
      color: 'bg-teal-50 text-teal-700',
    },
    {
      title: 'Appointments',
      value: '320',
      detail: 'Total bookings',
      icon: FiCalendar,
      color: 'bg-violet-50 text-violet-700',
    },
    {
      title: 'Product Orders',
      value: '156',
      detail: 'Total orders',
      icon: FiShoppingBag,
      color: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-950 text-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600">
              <FiHeart size={23} />
            </span>

            <span className="text-2xl font-bold">
              Care<span className="text-teal-400">Bridge</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Admin profile */}
        <div className="mx-4 mt-6 flex items-center gap-3 rounded-xl bg-white/5 p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 font-bold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold">Administrator</p>
            <p className="mt-1 text-xs text-slate-400">Admin Account</p>
          </div>
        </div>

        {/* Sidebar navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-7">
          <p className="mb-4 px-3 text-xs font-bold tracking-widest text-slate-500 uppercase">
            Management
          </p>

          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    index === 0
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Sidebar bottom */}
        <div className="border-t border-white/10 p-4">
          <a
            href="#settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/10"
          >
            <FiSettings size={19} />
            Settings
          </a>

          <a
            href="/login"
            className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-300 hover:bg-red-500/10"
          >
            <FiLogOut size={19} />
            Logout
          </a>
        </div>
      </aside>

      {/* Main section */}
      <div className="min-h-screen lg:ml-72">

        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu size={23} />
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Admin Dashboard
              </h1>
              <p className="hidden text-xs text-slate-500 sm:block">
                Manage your CareBridge platform
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
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
              A
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main
          id="admin-dashboard"
          className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8"
        >

          {/* Welcome banner */}
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

            <div className="pointer-events-none absolute -right-12 -bottom-28 h-80 w-80 rounded-full border-[35px] border-white/5" />
            <div className="pointer-events-none absolute top-5 right-24 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
          </section>

          {/* Statistics */}
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

                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
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

          {/* Doctor verification */}
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
                {doctors.filter((doctor) => doctor.status === 'Pending').length} Pending
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="bg-slate-50 text-xs text-slate-500">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Doctor</th>
                      <th className="px-6 py-4 font-semibold">Specialty</th>
                      <th className="px-6 py-4 font-semibold">Email</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Actions</th>
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
                              doctor.status === 'Approved'
                                ? 'bg-teal-50 text-teal-700'
                                : doctor.status === 'Rejected'
                                  ? 'bg-red-50 text-red-700'
                                  : 'bg-amber-50 text-amber-700'
                            }`}
                          >
                            {doctor.status}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          {doctor.status === 'Pending' ? (
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  handleDoctorStatus(doctor.id, 'Approved')
                                }
                                className="rounded-lg bg-teal-50 p-2 text-teal-700 hover:bg-teal-100"
                                title="Approve doctor"
                              >
                                <FiCheck size={17} />
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  handleDoctorStatus(doctor.id, 'Rejected')
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

          {/* Management cards */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-900">
                Manage Platform
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Access the main management sections.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: 'User Management',
                  description: 'View and manage registered users.',
                  icon: FiUsers,
                  color: 'bg-blue-50 text-blue-700',
                  id: 'users',
                },
                {
                  title: 'Appointments',
                  description: 'Monitor patient appointment bookings.',
                  icon: FiCalendar,
                  color: 'bg-violet-50 text-violet-700',
                  id: 'appointments',
                },
                {
                  title: 'Product Management',
                  description: 'Manage medical store products.',
                  icon: FiPackage,
                  color: 'bg-amber-50 text-amber-700',
                  id: 'products',
                },
                {
                  title: 'Order Management',
                  description: 'Review and manage customer orders.',
                  icon: FiShoppingBag,
                  color: 'bg-emerald-50 text-emerald-700',
                  id: 'orders',
                },
                {
                  title: 'Payment Management',
                  description: 'Review payment records and transactions.',
                  icon: FiCreditCard,
                  color: 'bg-rose-50 text-rose-700',
                  id: 'payments',
                },
                {
                  title: 'System Settings',
                  description: 'Manage platform settings and preferences.',
                  icon: FiSettings,
                  color: 'bg-slate-100 text-slate-700',
                  id: 'settings',
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={`#${item.id}`}
                    className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
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

          {/* Recent activity */}
          <section id="appointments" className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
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
                  Dashboard preview
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Real user registrations, appointment updates, product orders
                  and payment activity will appear here after backend
                  integration.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} CareBridge Admin. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;