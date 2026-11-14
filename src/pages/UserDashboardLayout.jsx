
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FiHeart,
  FiHome,
  FiCalendar,
  FiActivity,
  FiBookOpen,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiLogOut,
  FiBell,
  FiSettings,
} from "react-icons/fi";

function UserDashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: FiHome, to: "/user-dashboard" },
    {
      name: "My Appointments",
      icon: FiCalendar,
      to: "/user-dashboard/appointments",
    },
    {
      name: "Health Checker",
      icon: FiActivity,
      to: "/user-dashboard/health-checker",
    },
    {
      name: "Counseling",
      icon: FiHeart,
      to: "/user-dashboard/counseling",
    },
    {
      name: "Books & Resources",
      icon: FiBookOpen,
      to: "/user-dashboard/books",
    },
    {
      name: "Medical Store",
      icon: FiShoppingBag,
      to: "/user-dashboard/shop",
    },
    {
      name: "My Profile",
      icon: FiUser,
      to: "/user-dashboard/profile",
    },
    {
  name: "Settings",
  icon: FiSettings,
  to: "/user-dashboard/settings",
},
  ];

  const isActive = (path) => {
    if (path === "/user-dashboard") {
      return location.pathname === path;
    }

    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-slate-50">

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
          <Link
            to="/user-dashboard"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
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
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
            Main Menu
          </p>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.to);

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t border-slate-100 p-4">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            <FiLogOut size={19} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Right Side Content */}
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
                Patient Dashboard
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                Your personal healthcare space
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600"
              aria-label="Notifications"
            >
              <FiBell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <Link
              to="/user-dashboard/profile"
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

        {/* Page changes here; Sidebar stays */}
        <main className="min-w-0">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default UserDashboardLayout;
