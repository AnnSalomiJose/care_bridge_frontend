
import { useMemo, useState } from "react";
import {
  FiSearch,
  FiUsers,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEye,
  FiX,
  FiCheckCircle,
  FiXCircle,
  FiShield,
  FiCalendar,
} from "react-icons/fi";

const initialUsers = [
  {
    id: 1,
    name: "Ann Maria",
    email: "annmaria@example.com",
    phone: "9876543210",
    location: "Thrissur, Kerala",
    joined: "2026-08-12",
    role: "Patient",
    status: "Active",
  },
  {
    id: 2,
    name: "John Thomas",
    email: "john@example.com",
    phone: "9876543211",
    location: "Kochi, Kerala",
    joined: "2026-08-20",
    role: "Patient",
    status: "Active",
  },
  {
    id: 3,
    name: "Meera Nair",
    email: "meera@example.com",
    phone: "9876543212",
    location: "Calicut, Kerala",
    joined: "2026-09-05",
    role: "Patient",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Rahul Jose",
    email: "rahul@example.com",
    phone: "9876543213",
    location: "Chalakudy, Kerala",
    joined: "2026-09-18",
    role: "Patient",
    status: "Active",
  },
  {
    id: 5,
    name: "Anjali Thomas",
    email: "anjali@example.com",
    phone: "9876543214",
    location: "Palakkad, Kerala",
    joined: "2026-10-01",
    role: "Patient",
    status: "Active",
  },
];

function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const activeCount = users.filter(
    (user) => user.status === "Active"
  ).length;

  const blockedCount = users.filter(
    (user) => user.status === "Blocked"
  ).length;

  const filters = ["All", "Active", "Blocked"];

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesFilter =
        activeFilter === "All" || user.status === activeFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.phone.includes(searchText) ||
        user.location.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [users, activeFilter, search]);

  const updateUserStatus = (id, status) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id ? { ...user, status } : user
      )
    );

    setSelectedUser((previous) =>
      previous?.id === id ? { ...previous, status } : previous
    );
  };

  const getStatusStyle = (status) => {
    return status === "Active"
      ? "bg-green-50 text-green-700"
      : "bg-red-50 text-red-700";
  };

  const formatDate = (date) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Heading */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            Admin Management
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Manage Users
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View registered patients and manage their account status.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Total Users
                </p>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {users.length}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <FiUsers size={23} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Active Users
                </p>

                <p className="mt-3 text-3xl font-bold text-green-700">
                  {activeCount}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <FiCheckCircle size={23} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Blocked Users
                </p>

                <p className="mt-3 text-3xl font-bold text-red-600">
                  {blockedCount}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <FiXCircle size={23} />
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, phone or location..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "bg-teal-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Users Table */}
        <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Registered Users
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View patient information and manage account access.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">

              <thead className="bg-slate-50 text-xs text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">User</th>
                  <th className="px-6 py-4 font-semibold">Phone</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Joined Date</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="transition hover:bg-slate-50/70"
                  >

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-50 font-bold text-teal-700">
                          {user.name
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {user.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {user.phone}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {user.location}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {formatDate(user.joined)}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">

                        <button
                          type="button"
                          onClick={() => setSelectedUser(user)}
                          title="View user details"
                          className="rounded-lg bg-blue-50 p-2 text-blue-700 hover:bg-blue-100"
                        >
                          <FiEye size={17} />
                        </button>

                        {user.status === "Active" ? (
                          <button
                            type="button"
                            onClick={() =>
                              updateUserStatus(user.id, "Blocked")
                            }
                            title="Block user"
                            className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                          >
                            <FiXCircle size={17} />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              updateUserStatus(user.id, "Active")
                            }
                            title="Activate user"
                            className="rounded-lg bg-green-50 p-2 text-green-700 hover:bg-green-100"
                          >
                            <FiCheckCircle size={17} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="px-5 py-14 text-center">
              <FiSearch className="mx-auto text-3xl text-slate-300" />

              <h3 className="mt-3 font-semibold text-slate-800">
                No users found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search or select a different filter.
              </p>
            </div>
          )}
        </section>

        <p className="text-center text-xs text-slate-400">
          Sample user records are used for this frontend preview.
        </p>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4"
          onClick={() => setSelectedUser(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="user-modal-title"
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2
                id="user-modal-title"
                className="text-xl font-bold text-slate-900"
              >
                User Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close"
              >
                <FiX size={21} />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-xl font-bold text-teal-700">
                {selectedUser.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedUser.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {selectedUser.role}
                </p>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                    selectedUser.status
                  )}`}
                >
                  {selectedUser.status}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                    {selectedUser.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Phone Number</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedUser.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedUser.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCalendar className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Joined Date</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {formatDate(selectedUser.joined)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiShield className="mt-1 text-teal-600" />

                <div>
                  <p className="text-xs text-slate-500">Account Role</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedUser.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              {selectedUser.status === "Active" ? (
                <button
                  type="button"
                  onClick={() =>
                    updateUserStatus(selectedUser.id, "Blocked")
                  }
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-100"
                >
                  <FiXCircle />
                  Block User
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    updateUserStatus(selectedUser.id, "Active")
                  }
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 hover:bg-green-100"
                >
                  <FiCheckCircle />
                  Activate User
                </button>
              )}

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default AdminUsers;
