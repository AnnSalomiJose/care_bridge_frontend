
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import {
  FiHeart,
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
  FiVideo,
  FiBookOpen,
  FiBarChart2,
} from "react-icons/fi";

function AdminDashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: FiGrid,
      to: "/admin-dashboard",
    },
    {
      name: "Users",
      icon: FiUsers,
      to: "/admin-dashboard/users",
    },
    {
      name: "Doctors",
      icon: FiUserCheck,
      to: "/admin-dashboard/doctors",
    },
    {
      name: "Appointments",
      icon: FiCalendar,
      to: "/admin-dashboard/appointments",
    },
    {
      name: "Products",
      icon: FiPackage,
      to: "/admin-dashboard/products",
    },
    {
      name: "Orders",
      icon: FiShoppingBag,
      to: "/admin-dashboard/orders",
    },
    {
      name: "Payments",
      icon: FiCreditCard,
      to: "/admin-dashboard/payments",
    },
    {
      name: "Counseling Videos",
      icon: FiVideo,
      to: "/admin-dashboard/counseling",
    },
    {
      name: "Books & Resources",
      icon: FiBookOpen,
      to: "/admin-dashboard/books",
    },
    {
      name: "Reports & Analytics",
      icon: FiBarChart2,
      to: "/admin-dashboard/reports",
    },
    {
      name: "Settings",
      icon: FiSettings,
      to: "/admin-dashboard/settings",
    },
  ];

  const isActive = (path) => {
    if (path === "/admin-dashboard") {
      return location.pathname === path;
    }

    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Admin Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-950 text-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <Link
            to="/admin-dashboard"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600">
              <FiHeart size={23} />
            </span>

            <span className="text-2xl font-bold">
              Care<span className="text-teal-400">Bridge</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
            aria-label="Close menu"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Admin Profile */}
        <div className="mx-4 mt-6 flex items-center gap-3 rounded-xl bg-white/5 p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 font-bold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold">
              Administrator
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Admin Account
            </p>
          </div>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-7">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-slate-500">
            Management
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
                      ? "bg-teal-600 text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom */}
        <div className="border-t border-white/10 p-4">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-300 hover:bg-red-500/10"
          >
            <FiLogOut size={19} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Right Side */}
      <div className="min-h-screen lg:ml-72">

        {/* Admin Topbar */}
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

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
              A
            </div>
          </div>
        </header>

        {/* Page Content Changes Here */}
        <main className="min-w-0">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default AdminDashboardLayout;
