
import { useState } from "react";
import {
  FiSettings,
  FiBell,
  FiUser,
  FiSave,
  FiCheckCircle,
} from "react-icons/fi";

function AdminSettings() {
  const [platform, setPlatform] = useState({
    name: "CareBridge",
    email: "support@carebridge.com",
    phone: "+91 9876543210",
    address: "Kerala, India",
  });

  const [notifications, setNotifications] = useState({
    newUser: true,
    newDoctor: true,
    appointments: true,
    orders: true,
    payments: true,
  });

  const [preferences, setPreferences] = useState({
    registration: true,
    maintenance: false,
  });

  const [saved, setSaved] = useState(false);

  const handlePlatformChange = (e) => {
    setPlatform({
      ...platform,
      [e.target.name]: e.target.value,
    });
    setSaved(false);
  };

  const handleNotificationChange = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    setSaved(false);
  };

  const handlePreferenceChange = (name) => {
    setPreferences((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <FiSettings size={25} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Settings
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your CareBridge platform preferences.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">

        {/* General Settings */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <FiSettings className="text-blue-600" size={22} />
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                General Settings
              </h2>
              <p className="text-sm text-gray-500">
                Basic information about your platform.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Platform Name
              </label>
              <input
                type="text"
                name="name"
                value={platform.name}
                onChange={handlePlatformChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Support Email
              </label>
              <input
                type="email"
                name="email"
                value={platform.email}
                onChange={handlePlatformChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                value={platform.phone}
                onChange={handlePlatformChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={platform.address}
                onChange={handlePlatformChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <FiBell className="text-blue-600" size={22} />
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Notification Preferences
              </h2>
              <p className="text-sm text-gray-500">
                Choose which activities should trigger notifications.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "newUser",
                title: "New User Registration",
                description: "Get notified when a new patient registers.",
              },
              {
                name: "newDoctor",
                title: "New Doctor Registration",
                description: "Get notified about new doctor registrations.",
              },
              {
                name: "appointments",
                title: "Appointments",
                description: "Receive notifications about appointment activity.",
              },
              {
                name: "orders",
                title: "New Orders",
                description: "Get notified when a patient places an order.",
              },
              {
                name: "payments",
                title: "Payment Updates",
                description: "Receive payment-related notifications.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {item.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={notifications[item.name]}
                  onClick={() => handleNotificationChange(item.name)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                    notifications[item.name]
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                      notifications[item.name]
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Preferences */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <FiUser className="text-blue-600" size={22} />
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Platform Preferences
              </h2>
              <p className="text-sm text-gray-500">
                Manage general platform options.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  User Registration
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Allow new users to register on CareBridge.
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={preferences.registration}
                onClick={() => handlePreferenceChange("registration")}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  preferences.registration
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    preferences.registration
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Maintenance Mode
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Mark the platform as under maintenance.
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={preferences.maintenance}
                onClick={() => handlePreferenceChange("maintenance")}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  preferences.maintenance
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    preferences.maintenance
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <FiSave size={17} />
            Save Changes
          </button>

          {saved && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600">
              <FiCheckCircle size={18} />
              Changes saved successfully!
            </p>
          )}
        </div>

      </form>

      <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
        These settings currently work only in the frontend.
        Persistent settings, notifications and maintenance controls
        will be connected during backend integration.
      </p>
    </div>
  );
}

export default AdminSettings;
