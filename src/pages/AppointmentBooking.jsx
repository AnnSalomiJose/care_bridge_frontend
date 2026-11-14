import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiVideo,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiHeart,
  FiInfo,
} from 'react-icons/fi';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Thomas',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD Cardiology',
    fee: '₹500',
    initials: 'ST',
    color: 'bg-rose-100 text-rose-700',
    location: 'Kochi, Kerala',
  },
  {
    id: 2,
    name: 'Dr. John Mathew',
    specialty: 'Dermatologist',
    qualification: 'MBBS, MD Dermatology',
    fee: '₹400',
    initials: 'JM',
    color: 'bg-blue-100 text-blue-700',
    location: 'Thrissur, Kerala',
  },
  {
    id: 3,
    name: 'Dr. Anu Maria',
    specialty: 'Psychologist',
    qualification: 'MA Psychology, MPhil',
    fee: '₹600',
    initials: 'AM',
    color: 'bg-violet-100 text-violet-700',
    location: 'Kozhikode, Kerala',
  },
  {
    id: 4,
    name: 'Dr. Rahul Nair',
    specialty: 'General Physician',
    qualification: 'MBBS, MD General Medicine',
    fee: '₹350',
    initials: 'RN',
    color: 'bg-teal-100 text-teal-700',
    location: 'Ernakulam, Kerala',
  },
  {
    id: 5,
    name: 'Dr. Meera Joseph',
    specialty: 'Pediatrician',
    qualification: 'MBBS, MD Pediatrics',
    fee: '₹450',
    initials: 'MJ',
    color: 'bg-amber-100 text-amber-700',
    location: 'Kochi, Kerala',
  },
  {
    id: 6,
    name: 'Dr. Arun Das',
    specialty: 'Neurologist',
    qualification: 'MBBS, DM Neurology',
    fee: '₹700',
    initials: 'AD',
    color: 'bg-indigo-100 text-indigo-700',
    location: 'Kottayam, Kerala',
  },
];

function AppointmentBooking() {
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    consultationType: 'Online',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!doctor) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-5 text-center">
        <FiCalendar size={45} className="text-slate-400" />

        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          Doctor Not Found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Please select a doctor before booking an appointment.
        </p>

        <Link
          to="/doctors"
          className="mt-6 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
        >
          Find Doctors
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-800 sm:py-14">
      <div className="mx-auto max-w-6xl">

        {/* Back link */}
        <Link
          to={`/doctors/${doctor.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          <FiArrowLeft />
          Back to Doctor Profile
        </Link>

        {/* Page heading */}
        <div className="mt-7">
          <p className="text-sm font-bold tracking-widest text-teal-600 uppercase">
            CareBridge Appointments
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Book Your Appointment
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Fill in your details to prepare an appointment request.
          </p>
        </div>

        <div className="mt-9 grid items-start gap-7 lg:grid-cols-3">

          {/* Booking form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">

              <h2 className="text-xl font-bold text-slate-900">
                Appointment Details
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Please provide accurate contact and appointment information.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                {/* Patient name */}
                <div>
                  <label
                    htmlFor="patientName"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Patient Full Name *
                  </label>

                  <div className="relative">
                    <FiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="patientName"
                      name="patientName"
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter patient name"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                {/* Email and phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </label>

                    <div className="relative">
                      <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number *
                    </label>

                    <div className="relative">
                      <FiPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-slate-200 py-3.5 pr-4 pl-11 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Date and time */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Appointment Date *
                    </label>

                    <div className="relative">
                      <FiCalendar className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={new Date().toLocaleDateString('en-CA')}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pr-3 pl-11 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Preferred Time *
                    </label>

                    <div className="relative">
                      <FiClock className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

                      <input
                        id="time"
                        name="time"
                        type="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pr-3 pl-11 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation type */}
                <div>
                  <label className="mb-3 block text-sm font-semibold text-slate-700">
                    Consultation Type *
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                        formData.consultationType === 'Online'
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-slate-200 hover:border-teal-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="Online"
                        checked={formData.consultationType === 'Online'}
                        onChange={handleChange}
                        className="h-4 w-4 accent-teal-600"
                      />

                      <FiVideo className="text-teal-700" size={23} />

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Online Consultation
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Video consultation
                        </p>
                      </div>
                    </label>

                    <label
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                        formData.consultationType === 'Hospital Visit'
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-slate-200 hover:border-teal-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value="Hospital Visit"
                        checked={formData.consultationType === 'Hospital Visit'}
                        onChange={handleChange}
                        className="h-4 w-4 accent-teal-600"
                      />

                      <FiMapPin className="text-teal-700" size={23} />

                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          Hospital Visit
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          In-person consultation
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Reason for Appointment *
                  </label>

                  <textarea
                    id="reason"
                    name="reason"
                    rows="4"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Briefly describe the reason for your visit..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-4 font-semibold text-white transition hover:bg-teal-700"
                >
                  Review Appointment
                  <FiArrowRight />
                </button>
              </form>

              {/* Appointment preview */}
              {submitted && (
                <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5">
                  <div className="flex items-center gap-2 text-teal-800">
                    <FiCheckCircle size={23} />
                    <h3 className="font-bold">
                      Appointment Details Ready
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Your appointment details have been prepared for review.
                    This is a frontend preview; the appointment has not been
                    submitted to a doctor.
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-slate-700">
                    <p><strong>Patient:</strong> {formData.patientName}</p>
                    <p><strong>Doctor:</strong> {doctor.name}</p>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>
                    <p><strong>Consultation:</strong> {formData.consultationType}</p>
                    <p><strong>Fee:</strong> {doctor.fee} (sample)</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Doctor summary */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Selected Doctor
              </h2>

              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold ${doctor.color}`}
                >
                  {doctor.initials}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-teal-700">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {doctor.qualification}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <FiMapPin className="text-teal-600" />
                {doctor.location}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-sm text-slate-500">
                  Consultation Fee
                </span>

                <span className="text-2xl font-bold text-slate-900">
                  {doctor.fee}
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex items-center gap-2 text-blue-800">
                <FiInfo size={21} />
                <h3 className="font-bold">Booking Information</h3>
              </div>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-blue-900">
                <li>• Your request requires doctor approval.</li>
                <li>• The selected time is a preference, not confirmed availability.</li>
                <li>• Actual booking and payment will be added later.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-teal-100 bg-teal-50 p-5">
              <div className="flex items-center gap-2 text-teal-800">
                <FiHeart size={21} />
                <h3 className="font-bold">CareBridge Reminder</h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-teal-900">
                For urgent or emergency medical concerns, do not wait for an
                appointment request. Seek immediate medical care.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default AppointmentBooking;