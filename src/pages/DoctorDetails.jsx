import { Link, useParams } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiVideo,
  FiStar,
  FiShield,
  FiCheckCircle,
  FiHeart,
  FiUser,
} from 'react-icons/fi';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Thomas',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD Cardiology',
    experience: '8 years',
    location: 'Kochi, Kerala',
    rating: '4.9',
    fee: '₹500',
    initials: 'ST',
    color: 'bg-rose-100 text-rose-700',
    about:
      'Experienced cardiologist providing consultations and general guidance on heart health and preventive care.',
    services: [
      'General heart health consultation',
      'Preventive cardiac care',
      'Follow-up consultation',
    ],
  },
  {
    id: 2,
    name: 'Dr. John Mathew',
    specialty: 'Dermatologist',
    qualification: 'MBBS, MD Dermatology',
    experience: '6 years',
    location: 'Thrissur, Kerala',
    rating: '4.8',
    fee: '₹400',
    initials: 'JM',
    color: 'bg-blue-100 text-blue-700',
    about:
      'Provides consultations for skin, hair and general dermatological concerns.',
    services: [
      'Skin health consultation',
      'Hair and scalp consultation',
      'Follow-up consultation',
    ],
  },
  {
    id: 3,
    name: 'Dr. Anu Maria',
    specialty: 'Psychologist',
    qualification: 'MA Psychology, MPhil',
    experience: '7 years',
    location: 'Kozhikode, Kerala',
    rating: '4.9',
    fee: '₹600',
    initials: 'AM',
    color: 'bg-violet-100 text-violet-700',
    about:
      'Offers mental wellbeing support and counseling for different life challenges.',
    services: [
      'General counseling',
      'Stress management support',
      'Mental wellbeing sessions',
    ],
  },
  {
    id: 4,
    name: 'Dr. Rahul Nair',
    specialty: 'General Physician',
    qualification: 'MBBS, MD General Medicine',
    experience: '10 years',
    location: 'Ernakulam, Kerala',
    rating: '4.7',
    fee: '₹350',
    initials: 'RN',
    color: 'bg-teal-100 text-teal-700',
    about:
      'Provides general medical consultations and guidance for common health concerns.',
    services: [
      'General medical consultation',
      'Basic health assessment',
      'Follow-up consultation',
    ],
  },
  {
    id: 5,
    name: 'Dr. Meera Joseph',
    specialty: 'Pediatrician',
    qualification: 'MBBS, MD Pediatrics',
    experience: '9 years',
    location: 'Kochi, Kerala',
    rating: '4.8',
    fee: '₹450',
    initials: 'MJ',
    color: 'bg-amber-100 text-amber-700',
    about:
      'Provides healthcare consultations for infants, children and adolescents.',
    services: [
      'Child health consultation',
      'Growth and development guidance',
      'Follow-up consultation',
    ],
  },
  {
    id: 6,
    name: 'Dr. Arun Das',
    specialty: 'Neurologist',
    qualification: 'MBBS, DM Neurology',
    experience: '12 years',
    location: 'Kottayam, Kerala',
    rating: '4.9',
    fee: '₹700',
    initials: 'AD',
    color: 'bg-indigo-100 text-indigo-700',
    about:
      'Provides specialist consultations for neurological health concerns.',
    services: [
      'Neurology consultation',
      'Follow-up consultation',
      'General neurological guidance',
    ],
  },
];

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === Number(id));

  if (!doctor) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-5 text-center">
        <FiUser size={45} className="text-slate-400" />

        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          Doctor Not Found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          We could not find the requested doctor profile.
        </p>

        <Link
          to="/doctors"
          className="mt-6 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
        >
          Back to Doctors
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-6xl px-5 py-10">

        {/* Back link */}
        <Link
          to="/doctors"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          <FiArrowLeft />
          Back to Doctors
        </Link>

        {/* Doctor profile */}
        <section className="mt-7 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <div className="h-3 bg-teal-600" />

          <div className="p-6 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              <div
                className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl text-3xl font-bold ${doctor.color}`}
              >
                {doctor.initials}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {doctor.name}
                  </h1>

                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                    <FiCheckCircle />
                    Sample Profile
                  </span>
                </div>

                <p className="mt-2 font-semibold text-teal-700">
                  {doctor.specialty}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {doctor.qualification}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <FiClock className="text-teal-600" />
                    {doctor.experience} experience
                  </span>

                  <span className="flex items-center gap-2">
                    <FiMapPin className="text-teal-600" />
                    {doctor.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiStar className="fill-amber-400 text-amber-400" />
                    {doctor.rating} rating (sample)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-9 grid gap-6 border-t border-slate-100 pt-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold text-slate-900">
                  About the Doctor
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {doctor.about}
                </p>

                <h3 className="mt-8 font-bold text-slate-900">
                  Consultation Services
                </h3>

                <div className="mt-4 space-y-3">
                  {doctor.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <FiCheckCircle className="shrink-0 text-teal-600" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking card */}
              <div className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  Consultation Fee
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {doctor.fee}
                </h2>

                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <FiVideo className="text-teal-600" />
                    Online consultation
                  </div>

                  <Link
  to={`/book-appointment/${doctor.id}`}
  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 font-semibold text-white transition hover:bg-teal-700"
>
  Book Appointment
  <FiCalendar />
</Link>

                  <div className="flex items-center gap-3">
                    <FiShield className="text-teal-600" />
                    Doctor verification planned
                  </div>
                </div>

                <Link
                  to="/login"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 font-semibold text-white transition hover:bg-teal-700"
                >
                  Login to Book
                  <FiArrowLeft className="rotate-180" />
                </Link>

                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  Login is required before booking an appointment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-blue-100 bg-blue-50 p-4 text-xs leading-6 text-blue-800">
          <FiHeart className="mt-1 shrink-0" />
          <p>
            Doctor details, ratings, qualifications and fees on this page are
            demonstration data only. Actual verified doctor information will
            be connected later.
          </p>
        </div>
      </div>
    </main>
  );
}

export default DoctorDetails;