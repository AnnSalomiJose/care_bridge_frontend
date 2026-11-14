import { useState } from "react";
import { FiSettings, FiBell, FiMail, FiShield } from "react-icons/fi";

function UserSettings() {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your CareBridge account preferences.
        </p>

        <div className="mt-8 space-y-5">

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FiBell className="text-xl text-teal-600" />
              <h2 className="font-bold">Notifications</h2>
            </div>

            <label className="mt-6 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-700">
                Enable Notifications
              </span>

              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="h-5 w-5 accent-teal-600"
              />
            </label>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FiMail className="text-xl text-teal-600" />
              <h2 className="font-bold">Email Preferences</h2>
            </div>

            <label className="mt-6 flex items-center justify-between gap-4">
              <span className="text-sm text-slate-700">
                Receive Email Updates
              </span>

              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
                className="h-5 w-5 accent-teal-600"
              />
            </label>
          </section>

          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FiShield className="text-xl text-teal-600" />
              <h2 className="font-bold">Account Settings</h2>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Password management and account security options
              will be connected during the authentication stage.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default UserSettings;