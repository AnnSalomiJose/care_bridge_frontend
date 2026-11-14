import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiMenu,
  FiX,
  FiArrowRight,
} from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

 const navLinks = [
  { name: 'Health Checker', href: '/health-checker' },
  { name: 'Find Doctors', href: '/doctors' },
  { name: 'Counseling', href: '/counseling' },
  { name: 'Books & Resources', href: '/books' },
  { name: 'Medical Store', href: '/shop' },
];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
            <FiHeart size={23} />
          </span>

          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Care<span className="text-teal-600">Bridge</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-600 hover:text-teal-600"
          >
            Home
          </Link>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Login and Register buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded-xl border border-teal-600 px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Register
            <FiArrowRight />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Home
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl border border-teal-600 px-4 py-3 text-center text-sm font-semibold text-teal-700"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl bg-teal-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;