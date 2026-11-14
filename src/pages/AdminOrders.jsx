
import { useState } from "react";
import {
  FiSearch,
  FiEye,
  FiX,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

const initialOrders = [
  {
    id: "CB1001",
    patient: "Anu Thomas",
    items: [
      { name: "Wheelchair", quantity: 1, price: 5000 },
    ],
    date: "2026-11-05",
    total: 5000,
    payment: "UPI",
    paymentStatus: "Paid",
    status: "Pending",
  },
  {
    id: "CB1002",
    patient: "Meera Joseph",
    items: [
      { name: "Digital Thermometer", quantity: 2, price: 250 },
      { name: "Hand Sanitizer", quantity: 1, price: 150 },
    ],
    date: "2026-11-06",
    total: 650,
    payment: "COD",
    paymentStatus: "Pending",
    status: "Confirmed",
  },
  {
    id: "CB1003",
    patient: "Arun Kumar",
    items: [
      { name: "Pulse Oximeter", quantity: 1, price: 850 },
    ],
    date: "2026-11-07",
    total: 850,
    payment: "UPI",
    paymentStatus: "Paid",
    status: "Shipped",
  },
  {
    id: "CB1004",
    patient: "Sneha Mathew",
    items: [
      { name: "BP Monitor", quantity: 1, price: 1200 },
    ],
    date: "2026-11-08",
    total: 1200,
    payment: "COD",
    paymentStatus: "Pending",
    status: "Delivered",
  },
];

function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.patient.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  const statusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Confirmed":
        return "bg-blue-100 text-blue-700";
      case "Shipped":
        return "bg-purple-100 text-purple-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );

    setSelectedOrder((prev) =>
      prev && prev.id === orderId
        ? { ...prev, status: newStatus }
        : prev
    );
  };

  const totalRevenue = orders
    .filter((order) => order.paymentStatus === "Paid")
    .reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Orders
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage customer orders.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
          <FiPackage className="text-blue-600" size={20} />
          <span className="text-sm font-medium text-gray-600">
            Total Orders: {orders.length}
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {orders.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending Orders</p>
          <h2 className="mt-2 text-2xl font-bold text-yellow-600">
            {orders.filter((order) => order.status === "Pending").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Paid Amount</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            ₹{totalRevenue}
          </h2>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search order ID or patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "All",
            "Pending",
            "Confirmed",
            "Shipped",
            "Delivered",
            "Cancelled",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Patient</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Total</th>
                <th className="px-5 py-4">Payment</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 font-semibold text-blue-600">
                      {order.id}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-800">
                      {order.patient}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {order.date}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                      ₹{order.total}
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-gray-700">
                        {order.payment}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {order.paymentStatus}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                      >
                        <FiEye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-5 py-10 text-center text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Order Details
                </h2>
                <p className="text-sm text-blue-600">
                  {selectedOrder.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mb-5 space-y-3">
              <div>
                <p className="text-xs text-gray-500">Patient</p>
                <p className="font-medium text-gray-800">
                  {selectedOrder.patient}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Order Date</p>
                <p className="font-medium text-gray-800">
                  {selectedOrder.date}
                </p>
              </div>
            </div>

            <h3 className="mb-3 font-semibold text-gray-800">
              Ordered Products
            </h3>

            <div className="mb-5 space-y-3">
              {selectedOrder.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-5 border-t border-gray-200 pt-3">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">
                  Total Amount
                </span>
                <span className="font-bold text-gray-900">
                  ₹{selectedOrder.total}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Payment: {selectedOrder.payment} ({selectedOrder.paymentStatus})
              </p>
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Update Order Status
              </label>

              <select
                value={selectedOrder.status}
                onChange={(e) =>
                  handleStatusChange(selectedOrder.id, e.target.value)
                }
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminOrders;
