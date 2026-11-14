
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCalendar,
  FiHeart,
  FiBookOpen,
  FiShoppingBag,
  FiHome,
  FiUser,
  FiClock,
  FiBell,
  FiMenu,
  FiX,
  FiArrowRight,
  FiPlus,
  FiSettings,
  FiLogOut,
  FiClipboard,
} from "react-icons/fi";

function UserDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dashboard Services
  const services = [
    {
      title: "Health Checker",
      description:
        "Share your symptoms and explore general health guidance.",
      icon: FiActivity,
      color: "bg-teal-50 text-teal-700",
      link: "/health-checker",
    },
    {
      title: "Find Doctors",
      description:
        "Explore healthcare professionals and their specialties.",
      icon: FiHeart,
      color: "bg-rose-50 text-rose-600",
      link: "/doctors",
    },
    {
      title: "Counseling",
      description:
        "Explore mental wellbeing and self-care resources.",
      icon: FiBookOpen,
      color: "bg-violet-50 text-violet-700",
      link: "/counseling",
    },
    {
      title: "Medical Store",
      description:
        "Explore medical equipment and healthcare products.",
      icon: FiShoppingBag,
      color: "bg-amber-50 text-amber-700",
      link: "/shop",
    },
  ];

  // Sidebar Menu Items
  const menuItems = [
    {
      name: "Dashboard",
      icon: FiHome,
      to: "/user-dashboard",
    },
    {
      name: "My Appointments",
      icon: FiCalendar,
      to: "#appointments",
    },
    {
      name: "Health Checker",
      icon: FiActivity,
      to: "/health-checker",
    },
    {
      name: "Counseling",
      icon: FiHeart,
      to: "/counseling",
    },
    {
      name: "Books & Resources",
      icon: FiBookOpen,
      to: "/books",
    },
    {
      name: "Medical Store",
      icon: FiShoppingBag,
      to: "/shop",
    },
    {
      name: "My Profile",
      icon: FiUser,
      to: "/user-profile",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Mobile Menu Overlay */}
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
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
              <FiHeart size={23} />
            </span>

            <span className="text-2xl font-bold text-slate-900">
              Care<span className="text-teal-600">Bridge</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const linkClass =
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  item.name === "Dashboard"
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                }`;

              // My Appointments - Scroll to dashboard section
              if (item.to.startsWith("#")) {
                return (
                  <a
                    key={item.name}
                    href={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={linkClass}
                  >
                    <Icon size={19} />
                    {item.name}
                  </a>
                );
              }

              // Other menu items - Navigate to React Router pages
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  <Icon size={19} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom */}
        <div className="border-t border-slate-100 p-4">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            <FiSettings size={19} />
            Settings
          </button>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <FiLogOut size={19} />
            Logout
          </Link>
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
              aria-label="Open menu"
            >
              <FiMenu size={23} />
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                User Dashboard
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                Your personal healthcare space
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button
              type="button"
              className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
              aria-label="Notifications"
            >
              <FiBell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* User Information */}
            <Link
              to="/user-profile"
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                U
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">
                  Welcome, User
                </p>

                <p className="text-xs text-slate-500">
                  Patient Account
                </p>
              </div>
            </Link>
          </div>
        </header>

        {/* Dashboard Body */}
        <main
          id="dashboard"
          className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8"
        >

          {/* Welcome Section */}
          <section className="relative overflow-hidden rounded-3xl bg-teal-700 p-7 text-white sm:p-10">
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm font-medium text-teal-100">
                YOUR HEALTH, YOUR PRIORITY
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Welcome to your
                <span className="block text-teal-200">
                  healthcare dashboard!
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-teal-50 sm:text-base">
                Explore healthcare services, manage your appointments and
                discover useful resources for your wellbeing.
              </p>

              <a
                href="#dashboard-services"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                Explore Services
                <FiArrowRight />
              </a>
            </div>

            <div className="pointer-events-none absolute -bottom-28 -right-12 h-80 w-80 rounded-full border-[35px] border-white/10" />

            <div className="pointer-events-none absolute right-24 top-5 h-32 w-32 rounded-full bg-teal-500/40 blur-2xl" />
          </section>

          {/* Overview Cards */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-slate-900">
                Your Overview
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                A quick look at your healthcare activities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Appointments",
                  value: "0",
                  label: "Upcoming appointments",
                  icon: FiCalendar,
                  color: "bg-blue-50 text-blue-700",
                },
                {
                  title: "Health Checks",
                  value: "0",
                  label: "Checks completed",
                  icon: FiActivity,
                  color: "bg-teal-50 text-teal-700",
                },
                {
                  title: "Counseling",
                  value: "0",
                  label: "Resources explored",
                  icon: FiHeart,
                  color: "bg-rose-50 text-rose-600",
                },
                {
                  title: "Orders",
                  value: "0",
                  label: "Medical store orders",
                  icon: FiShoppingBag,
                  color: "bg-amber-50 text-amber-700",
                },
              ].map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500">
                          {card.title}
                        </p>

                        <p className="mt-3 text-3xl font-bold text-slate-900">
                          {card.value}
                        </p>
                      </div>

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
                      >
                        <Icon size={23} />
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-slate-500">
                      {card.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Healthcare Services */}
          <section id="dashboard-services">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Explore Healthcare Services
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose a service to continue your healthcare journey.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 min-h-16 text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    <Link
                      to={service.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-all group-hover:gap-3"
                    >
                      Explore
                      <FiArrowRight />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Appointments and Health Information */}
          <section
            id="appointments"
            className="grid gap-6 lg:grid-cols-2"
          >

            {/* Appointments */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Upcoming Appointments
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Keep track of your doctor visits.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <FiCalendar size={22} />
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-dashed border-slate-200 px-4 py-9 text-center">
                <FiClipboard className="mx-auto text-slate-400" size={30} />

                <h3 className="mt-3 font-semibold text-slate-700">
                  No appointments yet
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Your upcoming appointments will appear here.
                </p>

                <Link
                  to="/doctors"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  Find a Doctor
                  <FiArrowRight />
                </Link>
              </div>
            </div>

            {/* Health Reminder */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Health & Wellbeing
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Make time for your wellbeing.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <FiHeart size={22} />
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-teal-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-teal-700">
                    <FiClock size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Take a moment for yourself
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Explore our wellbeing resources.
                    </p>
                  </div>
                </div>

                <Link
                  to="/counseling"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 hover:underline"
                >
                  Explore Resources
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </section>

          {/* Quick Action */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Need healthcare assistance?
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Explore your healthcare options and find the support you need.
                </p>
              </div>

              <Link
                to="/doctors"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                <FiPlus />
                Explore CareBridge
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} CareBridge. Your health, our care.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;
