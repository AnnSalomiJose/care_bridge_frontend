
import {
  FiBarChart2,
  FiUsers,
  FiUserCheck,
  FiCalendar,
  FiDollarSign,
  FiShoppingBag,
} from "react-icons/fi";

const statistics = [
  {
    title: "Total Users",
    value: "1,250",
    note: "Registered patients",
    icon: FiUsers,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Total Doctors",
    value: "85",
    note: "Registered doctors",
    icon: FiUserCheck,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Appointments",
    value: "460",
    note: "Total bookings",
    icon: FiCalendar,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Total Orders",
    value: "320",
    note: "Medical store orders",
    icon: FiShoppingBag,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Revenue",
    value: "₹2,45,000",
    note: "Sample paid amount",
    icon: FiDollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const monthlyOrders = [
  { month: "Jun", orders: 35 },
  { month: "Jul", orders: 50 },
  { month: "Aug", orders: 40 },
  { month: "Sep", orders: 65 },
  { month: "Oct", orders: 75 },
  { month: "Nov", orders: 90 },
];

const appointmentStatus = [
  {
    label: "Completed",
    count: 240,
    percentage: 52,
    color: "bg-green-500",
    textColor: "text-green-600",
  },
  {
    label: "Upcoming",
    count: 120,
    percentage: 26,
    color: "bg-blue-500",
    textColor: "text-blue-600",
  },
  {
    label: "Cancelled",
    count: 60,
    percentage: 13,
    color: "bg-red-500",
    textColor: "text-red-600",
  },
  {
    label: "Pending",
    count: 40,
    percentage: 9,
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
  },
];

function AdminReports() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <FiBarChart2 size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Reports & Analytics
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Overview of CareBridge platform activities.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-800">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    {item.note}
                  </p>
                </div>

                <div className={`rounded-xl p-3 ${item.bg} ${item.color}`}>
                  <Icon size={23} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="mb-7 grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* Monthly Orders Chart */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800">
              Monthly Orders
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Sample order activity over the last six months.
            </p>
          </div>

          <div className="flex h-64 items-end justify-around gap-3 border-b border-gray-200 px-2">
            {monthlyOrders.map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-xs font-semibold text-gray-600">
                  {item.orders}
                </span>

                <div
                  className="w-full max-w-12 rounded-t-lg bg-blue-500 transition-all hover:bg-blue-600"
                  style={{ height: `${item.orders}%` }}
                  title={`${item.orders} orders`}
                />

                <span className="text-xs text-gray-500">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Number of orders
          </p>
        </div>

        {/* Appointment Status */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800">
              Appointment Overview
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Breakdown of appointment statuses.
            </p>
          </div>

          <div className="space-y-6">
            {appointmentStatus.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {item.label}
                  </span>

                  <span className={`text-sm font-semibold ${item.textColor}`}>
                    {item.count} ({item.percentage}%)
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-500">
              Total Appointments
            </p>
            <h3 className="mt-1 text-2xl font-bold text-gray-800">
              460
            </h3>
          </div>
        </div>
      </div>

      {/* Additional Reports */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            Platform Summary
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-600">
                Active Doctors
              </span>
              <span className="font-semibold text-gray-800">
                72
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-600">
                Active Products
              </span>
              <span className="font-semibold text-gray-800">
                48
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-600">
                Counseling Videos
              </span>
              <span className="font-semibold text-gray-800">
                24
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Books & Resources
              </span>
              <span className="font-semibold text-gray-800">
                35
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            Order Status Overview
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-600">
                Delivered Orders
              </span>
              <span className="font-semibold text-green-600">
                210
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-600">
                Processing Orders
              </span>
              <span className="font-semibold text-blue-600">
                65
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-sm text-gray-600">
                Pending Orders
              </span>
              <span className="font-semibold text-yellow-600">
                30
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Cancelled Orders
              </span>
              <span className="font-semibold text-red-600">
                15
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Demo Data Notice */}
      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm text-blue-700">
          These are sample analytics figures for the frontend.
          Actual reports will be calculated from database records
          during backend integration.
        </p>
      </div>
    </div>
  );
}

export default AdminReports;
