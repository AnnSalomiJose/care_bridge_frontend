import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiMapPin,
  FiStar,
  FiClock,
  FiVideo,
  FiCalendar,
  FiArrowRight,
  FiFilter,
  FiUser,
} from 'react-icons/fi';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Thomas',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD Cardiology',
    experience: '8 years experience',
    location: 'Kochi, Kerala',
    rating: '4.9',
    fee: '₹500',
    availability: 'Available',
    initials: 'ST',
    color: 'bg-rose-100 text-rose-700',
    about:
      'Experienced cardiologist providing heart health consultations and preventive care.',
  },
  {
    id: 2,
    name: 'Dr. John Mathew',
    specialty: 'Dermatologist',
    qualification: 'MBBS, MD Dermatology',
    experience: '6 years experience',
    location: 'Thrissur, Kerala',
    rating: '4.8',
    fee: '₹400',
    availability: 'Available',
    initials: 'JM',
    color: 'bg-blue-100 text-blue-700',
    about:
      'Provides consultations for skin, hair and general dermatological concerns.',
  },
  {
    id: 3,
    name: 'Dr. Anu Maria',
    specialty: 'Psychologist',
    qualification: 'MA Psychology, MPhil',
    experience: '7 years experience',
    location: 'Kozhikode, Kerala',
    rating: '4.9',
    fee: '₹600',
    availability: 'Available',
    initials: 'AM',
    color: 'bg-violet-100 text-violet-700',
    about:
      'Offers mental wellbeing support and counseling for different life challenges.',
  },
  {
    id: 4,
    name: 'Dr. Rahul Nair',
    specialty: 'General Physician',
    qualification: 'MBBS, MD General Medicine',
    experience: '10 years experience',
    location: 'Ernakulam, Kerala',
    rating: '4.7',
    fee: '₹350',
    availability: 'Available',
    initials: 'RN',
    color: 'bg-teal-100 text-teal-700',
    about:
      'Provides general medical consultations and guidance for common health concerns.',
  },
  {
    id: 5,
    name: 'Dr. Meera Joseph',
    specialty: 'Pediatrician',
    qualification: 'MBBS, MD Pediatrics',
    experience: '9 years experience',
    location: 'Kochi, Kerala',
    rating: '4.8',
    fee: '₹450',
    availability: 'Available',
    initials: 'MJ',
    color: 'bg-amber-100 text-amber-700',
    about:
      'Provides healthcare consultations for infants, children and adolescents.',
  },
  {
    id: 6,
    name: 'Dr. Arun Das',
    specialty: 'Neurologist',
    qualification: 'MBBS, DM Neurology',
    experience: '12 years experience',
    location: 'Kottayam, Kerala',
    rating: '4.9',
    fee: '₹700',
    availability: 'Available',
    initials: 'AD',
    color: 'bg-indigo-100 text-indigo-700',
    about:
      'Provides specialist consultations for neurological health concerns.',
  },
];

const specialties = [
  'All Specialties',
  'Cardiologist',
  'Dermatologist',
  'Psychologist',
  'General Physician',
  'Pediatrician',
  'Neurologist',
];

function Doctors() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [location, setLocation] = useState('');

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty =
      specialty === 'All Specialties' || doctor.specialty === specialty;

    const matchesLocation =
      doctor.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="bg-teal-700 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold tracking-widest text-teal-200 uppercase">
            CareBridge Healthcare Network
          </p>

          <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
            Find the Right Doctor for You
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-teal-50 sm:text-base">
            Explore healthcare professionals and find consultation options
            that suit your healthcare needs.
          </p>
        </div>
      </section>

      {/* Search and filters */}
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5">
        <div className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg md:grid-cols-3">
          <div>
            <label
              htmlFor="doctor-search"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search Doctor
            </label>

            <div className="relative">
              <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

              <input
                id="doctor-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Doctor name or specialty"
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="specialty"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Specialty
            </label>

            <div className="relative">
              <FiFilter className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

              <select
                id="specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500"
              >
                {specialties.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Location
            </label>

            <div className="relative">
              <FiMapPin className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />

              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city"
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor list */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Available Doctors
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Explore doctors based on your requirements.
            </p>
          </div>

          <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            {filteredDoctors.length} Doctors Found
          </span>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredDoctors.map((doctor) => (
              <article
                key={doctor.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold ${doctor.color}`}
                  >
                    {doctor.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {doctor.name}
                      </h3>

                      <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
                        <FiStar className="fill-amber-500 text-amber-500" />
                        {doctor.rating}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-semibold text-teal-700">
                      {doctor.specialty}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {doctor.qualification}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiClock className="text-teal-600" />
                    {doctor.experience}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiMapPin className="text-teal-600" />
                    {doctor.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiVideo className="text-teal-600" />
                    Online consultation available
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs text-slate-500">Consultation fee</p>
                    <p className="mt-1 text-xl font-bold text-slate-900">
                      {doctor.fee}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="rounded-xl border border-teal-600 px-3 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                    >
                      View Profile
                    </Link>

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                    >
                      <FiCalendar />
                      Book
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
            <FiUser className="mx-auto text-slate-400" size={35} />

            <h3 className="mt-4 font-bold text-slate-800">
              No doctors found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another doctor name, specialty or location.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch('');
                setSpecialty('All Specialties');
                setLocation('');
              }}
              className="mt-5 font-semibold text-teal-700 hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Information banner */}
      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 rounded-2xl bg-teal-50 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Not sure which specialist you need?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore the CareBridge Health Checker for general health
              information. It does not replace professional medical advice.
            </p>
          </div>

          <Link
            to="/health-checker"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Health Checker
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Doctors;