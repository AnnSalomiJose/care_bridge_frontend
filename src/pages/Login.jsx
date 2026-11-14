import { useState } from 'react';
import {
  FiHeart,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiShield,
} from 'react-icons/fi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend authentication will be connected later.
    alert('Login UI is ready. Backend authentication will be added later.');
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
              Your health deserves
              <span className="block text-teal-200">
                connected care.
              </span>
            </h1>

            <p className="mt-5 max-w-sm leading-7 text-teal-50">
              Connect with healthcare professionals, explore helpful resources
              and take positive steps towards your wellbeing.
            </p>
          </div>

          <p className="text-sm text-teal-100">
            © {new Date().getFullYear()} CareBridge. All rights reserved.
          </p>
        </div>

        {/* Right side - Login form */}
        <div className="flex items-center justify-center px-6 py-10 sm:px-10 md:py-14">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <a href="/" className="mb-9 flex items-center justify-center gap-2 md:hidden">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
                <FiHeart size={23} />
              </span>

              <span className="text-2xl font-bold text-slate-900">
                Care<span className="text-teal-600">Bridge</span>
              </span>
            </a>

            <div>
              <p className="text-sm font-bold tracking-widest text-teal-600 uppercase">
                Welcome back
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Login to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details to access your CareBridge account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

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
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <a
                    href="#forgot-password"
                    className="text-xs font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-teal-600"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-slate-600"
                >
                  Remember me
                </label>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
              >
                Login
                <FiArrowRight />
              </button>
            </form>

            {/* Register link */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{' '}
              <a
                href="/register"
                className="font-bold text-teal-600 hover:text-teal-700"
              >
                Create an account
              </a>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;