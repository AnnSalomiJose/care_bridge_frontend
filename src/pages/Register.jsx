import { useState } from 'react';
import {
  FiHeart,
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiShield,
} from 'react-icons/fi';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    if (!agreeTerms) {
      setError('Please accept the terms and conditions.');
      return;
    }

    // Backend registration will be connected later.
    alert('Registration UI is ready. Backend registration will be added later.');

    console.log('Registration form data:', {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-12">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/70 md:grid-cols-2">

        {/* Left side */}
        <div className="hidden flex-col justify-between bg-teal-700 p-10 text-white md:flex">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <FiHeart size={25} />
            </span>

            <span className="text-2xl font-bold">
              Care<span className="text-teal-200">Bridge</span>
            </span>
          </a>

          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <FiShield size={34} />
            </div>

            <h1 className="text-4xl leading-tight font-bold">
              Begin your
              <span className="block text-teal-200">
                wellness journey.
              </span>
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-teal-50">
              Create your CareBridge account and explore healthcare services,
              doctor appointments and wellbeing resources.
            </p>
          </div>

          <p className="text-sm text-teal-100">
            © {new Date().getFullYear()} CareBridge. All rights reserved.
          </p>
        </div>

        {/* Right side - Register form */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <a href="/" className="mb-8 flex items-center justify-center gap-2 md:hidden">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                <FiHeart size={23} />
              </span>

              <span className="text-2xl font-bold text-slate-900">
                Care<span className="text-teal-600">Bridge</span>
              </span>
            </a>

            <div>
              <p className="text-sm font-bold tracking-widest text-teal-600 uppercase">
                Create account
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Join CareBridge
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details to create your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              {/* Full name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <FiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <FiPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              {/* Account type */}
              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Register As
                </label>

                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                >
                  <option value="user">Patient / User</option>
                  <option value="doctor">Doctor</option>
                </select>

                <p className="mt-2 text-xs text-slate-500">
                  Doctor accounts will require admin verification later.
                </p>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pr-12 pl-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-teal-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FiEyeOff size={19} /> : <FiEye size={19} />}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pr-12 pl-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-teal-600"
                    aria-label={
                      showConfirmPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={19} />
                    ) : (
                      <FiEye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    setError('');
                  }}
                  className="mt-1 h-4 w-4 accent-teal-600"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-6 text-slate-600"
                >
                  I agree to the Terms and Conditions and Privacy Policy.
                </label>
              </div>

              {/* Error message */}
              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              {/* Register button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Create Account
                <FiArrowRight />
              </button>
            </form>

            {/* Login link */}
            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <a
                href="/login"
                className="font-bold text-teal-600 hover:text-teal-700"
              >
                Login
              </a>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;