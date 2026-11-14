
import { useState } from "react";
import {
  FiSettings,
  FiLock,
  FiBell,
  FiShield,
  FiMail,
  FiCalendar,
  FiEye,
  FiSave,
  FiCheckCircle,
} from "react-icons/fi";

function DoctorSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    appointmentNotifications: true,
    reminderNotifications: true,
    profileVisibility: true,
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  const handleToggle = (name) => {
    setSettings((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    setMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleSavePassword = (e) => {
    e.preventDefault();

    if (password.newPassword !== password.confirm) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    if (password.newPassword.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    setMessage("Password change request saved in this demo.");
    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  const handleSaveSettings = () => {
    setMessage("Settings saved successfully!");
  };

  const toggleItems = [
    {
      name: "emailNotifications",
      title: "Email Notifications",
      description: "Receive important updates through email.",
      icon: <FiMail />,
    },
    {
      name: "appointmentNotifications",
      title: "Appointment Notifications",
      description: "Get notified about new appointments and requests.",
      icon: <FiCalendar />,
    },
    {
      name: "reminderNotifications",
      title: "Appointment Reminders",
      description: "Receive reminders about upcoming appointments.",
      icon: <FiBell />,
    },
    {
      name: "profileVisibility",
      title: "Profile Visibility",
      description: "Allow patients to view your doctor profile.",
      icon: <FiEye />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
            <FiSettings size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Settings
            </h1>
            <p className="text-sm text-gray-500">
              Manage your account preferences and security.
            </p>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="mb-6 rounded-xl bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <FiShield className="text-blue-600" size={22} />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Account Information
            </h2>
            <p className="text-sm text-gray-500">
              Your doctor account details.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Account Type
            </label>
            <input
              type="text"
              value="Doctor Account"
              disabled
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Account Status
            </label>
            <input
              type="text"
              value="Active"
              disabled
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="mb-6 rounded-xl bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <FiBell className="text-blue-600" size={22} />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Notification Settings
            </h2>
            <p className="text-sm text-gray-500">
              Choose which notifications you want to receive.
            </p>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {toggleItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleToggle(item.name)}
                aria-label={`Toggle ${item.title}`}
                aria-pressed={settings[item.name]}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  settings[item.name]
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    settings[item.name]
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSaveSettings}
          className="mt-4 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <FiSave size={17} />
          Save Settings
        </button>
      </div>

      {/* Change Password */}
      <div className="mb-6 rounded-xl bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <FiLock className="text-blue-600" size={22} />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Change Password
            </h2>
            <p className="text-sm text-gray-500">
              Update your account password.
            </p>
          </div>
        </div>

        <form onSubmit={handleSavePassword} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              name="current"
              value={password.current}
              onChange={handlePasswordChange}
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
              placeholder="Enter current password"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirm"
                value={password.confirm}
                onChange={handlePasswordChange}
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <FiLock size={17} />
            Update Password
          </button>
        </form>
      </div>

      {/* Message */}
      {message && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
          <FiCheckCircle size={18} />
          {message}
        </div>
      )}

      <p className="mt-5 text-xs text-gray-400">
        Settings are currently stored only in frontend state.
        Permanent saving and password verification will be added during backend integration.
      </p>
    </div>
  );
}

export default DoctorSettings;
