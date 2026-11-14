
import { useState } from "react";
import {
  FiSearch,
  FiCreditCard,
  FiEye,
  FiX,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

const initialPayments = [
  {
    id: "PAY1001",
    orderId: "CB1001",
    patient: "Anu Thomas",
    date: "2026-11-05",
    amount: 5000,
    method: "UPI",
    transactionId: "UPI782345610",
    status: "Paid",
  },
  {
    id: "PAY1002",
    orderId: "CB1002",
    patient: "Meera Joseph",
    date: "2026-11-06",
    amount: 650,
    method: "Cash on Delivery",
    transactionId: "COD-1002",
    status: "Pending",
  },
  {
    id: "PAY1003",
    orderId: "CB1003",
    patient: "Arun Kumar",
    date: "2026-11-07",
    amount: 850,
    method: "UPI",
    transactionId: "UPI982345612",
    status: "Paid",
  },
  {
    id: "PAY1004",
    orderId: "CB1004",
    patient: "Sneha Mathew",
    date: "2026-11-08",
    amount: 1200,
    method: "Cash on Delivery",
    transactionId: "COD-1004",
    status: "Pending",
  },
  {
    id: "PAY1005",
    orderId: "CB1005",
    patient: "Rahul Nair",
    date: "2026-11-08",
    amount: 450,
    method: "UPI",
    transactionId: "UPI562345678",
    status: "Failed",
  },
];

function AdminPayments() {
  const [payments] = useState(initialPayments);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(search.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(search.toLowerCase()) ||
      payment.patient.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || payment.status === filter;

    return matchesSearch && matchesFilter;
  });

  const paidAmount = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((total, payment) => total + payment.amount, 0);

  const statusStyle = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      case "Refunded":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Payments
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and monitor customer payment transactions.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm">
          <FiCreditCard className="text-blue-600" size={20} />
          <span className="text-sm font-medium text-gray-600">
            Total Payments: {payments.length}
          </span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Transactions</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800">
            {payments.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Successful Payments</p>
          <h2 className="mt-2 text-2xl font-bold text-green-600">
            {payments.filter((item) => item.status === "Paid").length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Paid Amount</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            ₹{paidAmount.toLocaleString("en-IN")}
          </h2>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="mb-5 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">

        <div className="relative w-full md:max-w-sm">
          <FiSearch className="absolute left-3 top-3.5 text-gray-400" />

          <input
            type="text"
            placeholder="Search payment, order or patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Paid", "Pending", "Failed", "Refunded"].map((item) => (
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

      {/* Payments Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">

            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-5 py-4">Payment ID</th>
                <th className="px-5 py-4">Patient</th>
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Amount</th>
                <th className="px-5 py-4">Method</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">

                    <td className="px-5 py-4 font-semibold text-blue-600">
                      {payment.id}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-800">
                      {payment.patient}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {payment.orderId}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {payment.date}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                      ₹{payment.amount.toLocaleString("en-IN")}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {payment.method}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedPayment(payment)}
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
                  <td colSpan="8" className="px-5 py-10 text-center text-gray-500">
                    No payments found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Payment Details Modal */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                Payment Details
              </h2>

              <button
                onClick={() => setSelectedPayment(null)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="mb-5 flex items-center gap-3 rounded-lg bg-gray-50 p-4">
              {selectedPayment.status === "Paid" ? (
                <FiCheckCircle className="text-green-600" size={28} />
              ) : selectedPayment.status === "Pending" ? (
                <FiClock className="text-yellow-600" size={28} />
              ) : (
                <FiAlertCircle className="text-red-600" size={28} />
              )}

              <div>
                <p className="text-sm text-gray-500">Payment Status</p>
                <p className="font-semibold text-gray-800">
                  {selectedPayment.status}
                </p>
              </div>
            </div>

            <div className="space-y-4">

              <div>
                <p className="text-xs text-gray-500">Payment ID</p>
                <p className="font-medium text-gray-800">
                  {selectedPayment.id}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Order ID</p>
                <p className="font-medium text-gray-800">
                  {selectedPayment.orderId}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Patient Name</p>
                <p className="font-medium text-gray-800">
                  {selectedPayment.patient}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Transaction ID</p>
                <p className="break-all font-medium text-gray-800">
                  {selectedPayment.transactionId}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Payment Date</p>
                <p className="font-medium text-gray-800">
                  {selectedPayment.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Payment Method</p>
                <p className="font-medium text-gray-800">
                  {selectedPayment.method}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{selectedPayment.amount.toLocaleString("en-IN")}
                </p>
              </div>

            </div>

            <button
              onClick={() => setSelectedPayment(null)}
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default AdminPayments;
