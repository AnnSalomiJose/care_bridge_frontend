
import { useState } from "react";
import {
  FiClock,
  FiCalendar,
  FiVideo,
  FiMapPin,
  FiSave,
  FiCheckCircle,
} from "react-icons/fi";

const initialSchedule = [
  { day: "Monday", enabled: true, start: "09:00", end: "17:00" },
  { day: "Tuesday", enabled: true, start: "09:00", end: "17:00" },
  { day: "Wednesday", enabled: true, start: "09:00", end: "17:00" },
  { day: "Thursday", enabled: true, start: "09:00", end: "17:00" },
  { day: "Friday", enabled: true, start: "09:00", end: "17:00" },
  { day: "Saturday", enabled: false, start: "09:00", end: "13:00" },
  { day: "Sunday", enabled: false, start: "09:00", end: "13:00" },
];

function DoctorAvailability() {
  const [schedule, setSchedule] = useState(initialSchedule);
  const [slotDuration, setSlotDuration] = useState("30");
  const [consultation, setConsultation] = useState({
    online: true,
    inPerson: true,
  });
  const [saved, setSaved] = useState(false);

  const handleDayToggle = (day) => {
    setSchedule((prev) =>
      prev.map((item) =>
        item.day === day
          ? { ...item, enabled: !item.enabled }
          : item
      )
    );
    setSaved(false);
  };

  const handleTimeChange = (day, field, value) => {
    setSchedule((prev) =>
      prev.map((item) =>
        item.day === day
          ? { ...item, [field]: value }
          : item
      )
    );
    setSaved(false);
  };

  const handleConsultationChange = (type) => {
    setConsultation((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const availableDays = schedule.filter((item) => item.enabled);

    if (availableDays.length === 0) {
      alert("Please select at least one available day.");
      return;
    }

    if (!consultation.online && !consultation.inPerson) {
      alert("Please select at least one consultation type.");
      return;
    }

    const invalidTime = availableDays.some(
      (item) => item.start >= item.end
    );

    if (invalidTime) {
      alert("Please check the start and end times.");
      return;
    }

    setSaved(true);
  };

  const availableDaysCount = schedule.filter(
    (item) => item.enabled
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
            <FiCalendar size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              My Availability
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your consultation days and working hours.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Available Days
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                {availableDaysCount} / 7
              </h2>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <FiCalendar size={23} />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Appointment Duration
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                {slotDuration} Minutes
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <FiClock size={23} />
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">

        {/* Weekly Schedule */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-800">
              Weekly Schedule
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Select your available days and consultation timings.
            </p>
          </div>

          <div className="space-y-4">
            {schedule.map((item) => (
              <div
                key={item.day}
                className="flex flex-col gap-3 rounded-lg border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center justify-between sm:w-36">
                  <span className="font-medium text-gray-800">
                    {item.day}
                  </span>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={item.enabled}
                    onClick={() => handleDayToggle(item.day)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      item.enabled ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        item.enabled ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>

                {item.enabled ? (
                  <div className="flex flex-wrap items-center gap-3">
                    <div>
                      <label className="mb-1 block text-xs text-gray-500">
                        From
                      </label>
                      <input
                        type="time"
                        value={item.start}
                        onChange={(e) =>
                          handleTimeChange(
                            item.day,
                            "start",
                            e.target.value
                          )
                        }
                        required
                        className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
                      />
                    </div>

                    <span className="mt-5 text-sm text-gray-400">
                      to
                    </span>

                    <div>
                      <label className="mb-1 block text-xs text-gray-500">
                        To
                      </label>
                      <input
                        type="time"
                        value={item.end}
                        onChange={(e) =>
                          handleTimeChange(
                            item.day,
                            "end",
                            e.target.value
                          )
                        }
                        required
                        className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 sm:mr-8">
                    Not Available
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Settings */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-800">
              Appointment Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Set the duration of each appointment.
            </p>
          </div>

          <div className="max-w-sm">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Appointment Duration
            </label>

            <select
              value={slotDuration}
              onChange={(e) => {
                setSlotDuration(e.target.value);
                setSaved(false);
              }}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="45">45 Minutes</option>
              <option value="60">60 Minutes</option>
            </select>
          </div>
        </div>

        {/* Consultation Type */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-bold text-gray-800">
              Consultation Type
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Choose how patients can consult you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4">
              <input
                type="checkbox"
                checked={consultation.online}
                onChange={() => handleConsultationChange("online")}
                className="h-4 w-4 accent-blue-600"
              />

              <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
                <FiVideo size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Online Consultation
                </p>
                <p className="text-xs text-gray-500">
                  Video consultation
                </p>
              </div>
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4">
              <input
                type="checkbox"
                checked={consultation.inPerson}
                onChange={() => handleConsultationChange("inPerson")}
                className="h-4 w-4 accent-blue-600"
              />

              <div className="rounded-lg bg-green-50 p-3 text-green-600">
                <FiMapPin size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  In-person Consultation
                </p>
                <p className="text-xs text-gray-500">
                  Hospital / Clinic visit
                </p>
              </div>
            </label>

          </div>
        </div>

        {/* Save */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <FiSave size={17} />
            Save Availability
          </button>

          {saved && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600">
              <FiCheckCircle size={18} />
              Availability saved successfully!
            </p>
          )}
        </div>

      </form>

      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
        <p className="text-sm text-blue-700">
          These availability settings currently work only in the frontend.
          They will be saved permanently and used for patient appointment
          booking during backend integration.
        </p>
      </div>

    </div>
  );
}

export default DoctorAvailability;
