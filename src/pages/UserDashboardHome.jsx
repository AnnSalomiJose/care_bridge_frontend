
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCalendar,
  FiHeart,
  FiBookOpen,
  FiShoppingBag,
  FiArrowRight,
  FiClipboard,
  FiClock,
  FiPlus,
} from "react-icons/fi";

function UserDashboardHome() {
  const services = [
    {
      title: "Health Checker",
      description:
        "Share your symptoms and explore general health guidance.",
      icon: FiActivity,
      color: "bg-teal-50 text-teal-700",
      link: "/user-dashboard/health-checker",
    },
    {
      title: "Find Doctors",
      description:
        "Explore healthcare professionals and their specialties.",
      icon: FiHeart,
      color: "bg-rose-50 text-rose-600",
      link: "/user-dashboard/doctors",
    },
    {
      title: "Counseling",
      description:
        "Explore mental wellbeing and self-care resources.",
      icon: FiBookOpen,
      color: "bg-violet-50 text-violet-700",
      link: "/user-dashboard/counseling",
    },
    {
      title: "Medical Store",
      description:
        "Explore medical equipment and healthcare products.",
      icon: FiShoppingBag,
      color: "bg-amber-50 text-amber-700",
      link: "/user-dashboard/shop",
    },
  ];

  const overview = [
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
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-5 py-8 sm:px-8">

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
            Explore healthcare services, manage your appointments
            and discover useful resources for your wellbeing.
          </p>

          <Link
            to="/user-dashboard/doctors"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
          >
            Explore Services
            <FiArrowRight />
          </Link>
        </div>

        <div className="pointer-events-none absolute -bottom-28 -right-12 h-80 w-80 rounded-full border-[35px] border-white/10" />

        <div className="pointer-events-none absolute right-24 top-5 h-32 w-32 rounded-full bg-teal-500/40 blur-2xl" />
      </section>

      {/* Overview Section */}
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
          {overview.map((card) => {
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
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900">
            Explore Healthcare Services
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose a service to continue your healthcare journey.
          </p>
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
      <section className="grid gap-6 lg:grid-cols-2">

        {/* Upcoming Appointments */}
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
            <FiClipboard
              className="mx-auto text-slate-400"
              size={30}
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No appointments yet
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Your upcoming appointments will appear here.
            </p>

            <Link
              to="/user-dashboard/doctors"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-700"
            >
              Find a Doctor
              <FiArrowRight />
            </Link>
          </div>

          <Link
            to="/user-dashboard/appointments"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:underline"
          >
            View All Appointments
            <FiArrowRight />
          </Link>
        </div>

        {/* Health and Wellbeing */}
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
              to="/user-dashboard/counseling"
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
            to="/user-dashboard/doctors"
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
    </div>
  );
}

export default UserDashboardHome;
