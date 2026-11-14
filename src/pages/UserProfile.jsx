
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiEdit2,
  FiSave,
  FiX,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiDroplet,
  FiShield,
  FiArrowLeft,
  FiActivity,
} from "react-icons/fi";

const initialProfile = {
  name: "CareBridge User",
  email: "user@example.com",
  phone: "",
  gender: "",
  dateOfBirth: "",
  bloodGroup: "",
  address: "",
  city: "",
  pinCode: "",
  emergencyContact: "",
};

function UserProfile() {
  const [profile, setProfile] = useState(initialProfile);
  const [formData, setFormData] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
    setMessage("");
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
    setMessage("Profile updated successfully!");
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100 disabled:bg-slate-50 disabled:text-slate-600";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Back Link */}
        <Link
          to="/user-dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
            CareBridge Account
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Header */}
        <div className="mb-7 rounded-2xl bg-gradient-to-r from-teal-700 to-cyan-600 p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-white/30 bg-white text-3xl font-bold text-teal-700">
              {initials || <FiUser />}
            </div>

            <div className="flex-1">
              <p className="text-sm text-teal-100">
                Patient Account
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {profile.name}
              </h2>

              <p className="mt-1 text-sm text-teal-100">
                {profile.email}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                <FiShield />
                CareBridge Patient
              </div>
            </div>

            {!isEditing && (
              <button
                type="button"
                onClick={handleEdit}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
              >
                <FiEdit2 />
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Success Message */}
        {message && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {message}
          </div>
        )}

        <form onSubmit={handleSave}>
          <div className="grid gap-7 lg:grid-cols-3">

            {/* Personal Information */}
            <div className="space-y-7 lg:col-span-2">

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                    <FiUser className="text-xl" />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-800">
                      Personal Information
                    </h2>

                    <p className="text-sm text-slate-500">
                      Your basic personal details
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Full Name */}
                  <div>
                    <label className={labelClass}>
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      className={inputClass}
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      required
                      className={inputClass}
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      pattern="[0-9]{10}"
                      className={inputClass}
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className={labelClass}>
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={inputClass}
                    >
                      <option value="">Select gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className={labelClass}>
                      Date of Birth
                    </label>

                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-3.5 text-slate-400" />

                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`${inputClass} pl-11`}
                      />
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div>
                    <label className={labelClass}>
                      Blood Group
                    </label>

                    <div className="relative">
                      <FiDroplet className="absolute left-4 top-3.5 text-red-400" />

                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`${inputClass} pl-11`}
                      >
                        <option value="">Select blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Address Information */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                    <FiMapPin className="text-xl" />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-800">
                      Address Information
                    </h2>

                    <p className="text-sm text-slate-500">
                      Your delivery and contact address
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className={labelClass}>
                      Complete Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      rows="3"
                      className={inputClass}
                      placeholder="House name, street and locality"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className={labelClass}>
                      City / District
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={inputClass}
                      placeholder="Enter city"
                    />
                  </div>

                  {/* PIN Code */}
                  <div>
                    <label className={labelClass}>
                      PIN Code
                    </label>

                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      disabled={!isEditing}
                      pattern="[0-9]{6}"
                      maxLength="6"
                      className={inputClass}
                      placeholder="6-digit PIN code"
                    />
                  </div>
                </div>
              </section>

              {/* Emergency Contact */}
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-red-50 p-3 text-red-600">
                    <FiPhone className="text-xl" />
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-800">
                      Emergency Contact
                    </h2>

                    <p className="text-sm text-slate-500">
                      Contact number of a trusted person
                    </p>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Emergency Contact Number
                  </label>

                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    disabled={!isEditing}
                    pattern="[0-9]{10}"
                    className={inputClass}
                    placeholder="Enter 10-digit contact number"
                  />
                </div>
              </section>

              {/* Edit Actions */}
              {isEditing && (
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                  >
                    <FiX />
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                  >
                    <FiSave />
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Right Side Information */}
            <div className="space-y-6">

              {/* Account Summary */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-bold text-slate-800">
                  Account Overview
                </h2>

                <div className="mt-5 space-y-5">

                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                      <FiUser />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Account Type
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        Patient
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                      <FiShield />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Account Status
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        Frontend Preview
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-purple-50 p-3 text-purple-700">
                      <FiActivity />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Health Information
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {profile.bloodGroup || "Not added"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-bold text-slate-800">
                  Contact Information
                </h2>

                <div className="mt-5 space-y-4">

                  <div className="flex items-start gap-3">
                    <FiMail className="mt-1 shrink-0 text-teal-600" />

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="break-all text-sm font-medium text-slate-700">
                        {profile.email || "Not added"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiPhone className="mt-1 shrink-0 text-teal-600" />

                    <div>
                      <p className="text-xs text-slate-500">Phone</p>
                      <p className="text-sm font-medium text-slate-700">
                        {profile.phone || "Not added"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-bold text-slate-800">
                  Quick Links
                </h2>

                <div className="mt-4 space-y-3">
                  <Link
                    to="/user-dashboard"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    My Dashboard
                  </Link>

                  <Link
                    to="/doctors"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    Find Doctors
                  </Link>

                  <Link
                    to="/shop"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    Medical Store
                  </Link>

                  <Link
                    to="/books"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
                  >
                    Books & Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-slate-400">
          CareBridge profile is currently a frontend preview.
          Profile changes are not saved permanently.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
