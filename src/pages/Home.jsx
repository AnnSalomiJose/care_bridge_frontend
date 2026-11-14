// import {
//   FiActivity,
//   FiArrowRight,
//   FiBookOpen,
//   FiCalendar,
//   FiCheckCircle,
//   FiHeart,
//   FiShield,
//   FiShoppingBag,
//   FiVideo,
// } from 'react-icons/fi';

// const services = [
//   {
//     icon: FiActivity,
//     title: 'Health Checker',
//     description:
//       'Share your symptoms to explore general health information and suitable next steps.',
//     link: '#health-checker',
//     color: 'bg-teal-50 text-teal-700',
//   },
//   {
//     icon: FiActivity,
//     title: 'Find a Doctor',
//     description:
//       'Explore doctors and request appointments based on your healthcare needs.',
//     link: '#doctors',
//     color: 'bg-blue-50 text-blue-700',
//   },
//   {
//     icon: FiHeart,
//     title: 'Mental Wellbeing',
//     description:
//       'Explore counseling videos, self-care ideas and emotional wellbeing resources.',
//     link: '#counseling',
//     color: 'bg-rose-50 text-rose-700',
//   },
//   {
//     icon: FiVideo,
//     title: 'Online Consultation',
//     description:
//       'Explore consultation options and connect with healthcare professionals.',
//     link: '#doctors',
//     color: 'bg-violet-50 text-violet-700',
//   },
//   {
//     icon: FiBookOpen,
//     title: 'Books & Resources',
//     description:
//       'Discover self-help books and helpful educational materials.',
//     link: '#resources',
//     color: 'bg-amber-50 text-amber-700',
//   },
//   {
//     icon: FiShoppingBag,
//     title: 'Medical Store',
//     description:
//       'Explore medical equipment and healthcare products in one place.',
//     link: '#shop',
//     color: 'bg-emerald-50 text-emerald-700',
//   },
// ];

// function Home() {
//   return (
//     <main className="overflow-hidden bg-white text-slate-800">
//       {/* Hero section */}
//       <section id="home" className="relative bg-teal-50/60">
//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:px-8">
//           {/* Left content */}
//           <div>
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm">
//               <FiHeart />
//               Healthcare support, all in one place
//             </div>

//             <h1 className="max-w-2xl text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               Your health journey,
//               <span className="block text-teal-600">
//                 connected with care.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
//               Discover healthcare resources, explore doctors, request
//               appointments and find support for your mental wellbeing with
//               CareBridge.
//             </p>

//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <a
//                 href="#health-checker"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-0.5 hover:bg-teal-700"
//               >
//                 Explore Health Checker
//                 <FiArrowRight />
//               </a>

//               <a
//                 href="#doctors"
//                 className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
//               >
//                 Find a Doctor
//               </a>
//             </div>

//             <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
//               <span className="flex items-center gap-2">
//                 <FiCheckCircle className="text-teal-600" />
//                 Healthcare resources
//               </span>
//               <span className="flex items-center gap-2">
//                 <FiCheckCircle className="text-teal-600" />
//                 Doctor appointments
//               </span>
//             </div>
//           </div>

//           {/* Right visual card */}
//           <div className="relative mx-auto w-full max-w-lg">
//             <div className="absolute -top-5 -left-5 h-28 w-28 rounded-full bg-teal-200/60 blur-2xl" />
//             <div className="absolute -right-5 -bottom-5 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />

//             <div className="relative rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-teal-900/10 sm:p-8">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-slate-500">
//                     Welcome to
//                   </p>
//                   <h2 className="mt-1 text-2xl font-bold text-slate-900">
//                     CareBridge
//                   </h2>
//                 </div>

//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
//                   <FiHeart size={30} />
//                 </div>
//               </div>

//               <div className="mt-7 rounded-2xl bg-teal-50 p-5">
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
//                     <FiShield size={24} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Start with your wellbeing
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Explore general health information and learn when to seek
//                       professional medical advice.
//                     </p>
//                   </div>
//                 </div>

//                 <a
//                   href="#health-checker"
//                   className="mt-5 flex items-center justify-between rounded-xl bg-white px-4 py-3 font-semibold text-teal-700 transition hover:bg-teal-100"
//                 >
//                   Explore health tools
//                   <FiArrowRight />
//                 </a>
//               </div>

//               <div className="mt-5 grid grid-cols-2 gap-4">
//                 <a
//                   href="#doctors"
//                   className="rounded-2xl border border-slate-100 p-4 transition hover:border-teal-200 hover:bg-teal-50/50"
//                 >
//                   <FiCalendar className="text-teal-600" size={24} />
//                   <h3 className="mt-3 font-semibold text-slate-900">
//                     Appointments
//                   </h3>
//                   <p className="mt-1 text-sm text-slate-500">
//                     Explore doctors
//                   </p>
//                 </a>

//                 <a
//                   href="#counseling"
//                   className="rounded-2xl border border-slate-100 p-4 transition hover:border-teal-200 hover:bg-teal-50/50"
//                 >
//                   <FiHeart className="text-rose-500" size={24} />
//                   <h3 className="mt-3 font-semibold text-slate-900">
//                     Wellbeing
//                   </h3>
//                   <p className="mt-1 text-sm text-slate-500">
//                     Find resources
//                   </p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services section */}
//       <section id="services" className="px-5 py-16 md:py-24 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-sm font-bold tracking-widest text-teal-600 uppercase">
//               What we offer
//             </p>
//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//               Healthcare support made simpler
//             </h2>
//             <p className="mt-4 leading-7 text-slate-600">
//               Explore the tools and resources designed to support different
//               parts of your healthcare journey.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {services.map((service) => {
//               const Icon = service.icon;

//               return (
//                 <article
//                   key={service.title}
//                   className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60"
//                 >
//                   <div
//                     className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}
//                   >
//                     <Icon size={26} />
//                   </div>

//                   <h3 className="mt-5 text-xl font-bold text-slate-900">
//                     {service.title}
//                   </h3>

//                   <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
//                     {service.description}
//                   </p>

//                   <a
//                     href={service.link}
//                     className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700 transition group-hover:gap-3"
//                   >
//                     Explore more
//                     <FiArrowRight />
//                   </a>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* How it works */}
//       <section className="bg-slate-50 px-5 py-16 md:py-20 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-sm font-bold tracking-widest text-teal-600 uppercase">
//               Getting started
//             </p>
//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//               Your next step starts here
//             </h2>
//           </div>

//           <div className="mt-12 grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 number: '01',
//                 title: 'Explore',
//                 description:
//                   'Discover health information, doctors and available resources.',
//               },
//               {
//                 number: '02',
//                 title: 'Choose',
//                 description:
//                   'Select the service or healthcare professional relevant to your needs.',
//               },
//               {
//                 number: '03',
//                 title: 'Connect',
//                 description:
//                   'Continue with an appointment request or explore helpful resources.',
//               },
//             ].map((step) => (
//               <div key={step.number} className="rounded-2xl bg-white p-7">
//                 <span className="text-3xl font-bold text-teal-600">
//                   {step.number}
//                 </span>
//                 <h3 className="mt-4 text-xl font-bold text-slate-900">
//                   {step.title}
//                 </h3>
//                 <p className="mt-3 leading-7 text-slate-600">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Health checker information */}
//       <section
//         id="health-checker"
//         className="scroll-mt-24 px-5 py-16 lg:px-8"
//       >
//         <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-teal-700 p-8 text-white md:flex-row md:items-center md:p-12">
//           <div className="max-w-2xl">
//             <h2 className="text-2xl font-bold sm:text-3xl">
//               Take the first step towards better health
//             </h2>
//             <p className="mt-3 leading-7 text-teal-50">
//               CareBridge health tools can provide general information, but they
//               cannot diagnose medical conditions or replace a healthcare
//               professional.
//             </p>
//           </div>

//           <a
//             href="#doctors"
//             className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
//           >
//             Explore doctors
//             <FiArrowRight />
//           </a>
//         </div>
//       </section>

//       {/* Placeholder destinations for navbar links */}
//       <section id="doctors" className="scroll-mt-24 px-5 py-10 lg:px-8">
//         <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 p-6 text-center">
//           <h2 className="text-xl font-bold text-slate-900">Find Doctors</h2>
//           <p className="mt-2 text-sm text-slate-600">
//             Doctor listing and appointment booking will be added in the next
//             development step.
//           </p>
//         </div>
//       </section>

//       <section
//         id="counseling"
//         className="scroll-mt-24 px-5 py-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 p-6 text-center">
//           <h2 className="text-xl font-bold text-slate-900">
//             Mental Wellbeing & Counseling
//           </h2>
//           <p className="mt-2 text-sm text-slate-600">
//             Counseling videos and wellbeing resources will be added here.
//           </p>
//         </div>
//       </section>

//       <section
//         id="resources"
//         className="scroll-mt-24 px-5 py-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 p-6 text-center">
//           <h2 className="text-xl font-bold text-slate-900">
//             Books & Resources
//           </h2>
//           <p className="mt-2 text-sm text-slate-600">
//             Helpful books and educational resources will be added here.
//           </p>
//         </div>
//       </section>

//       <section id="shop" className="scroll-mt-24 px-5 py-6 lg:px-8">
//         <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 p-6 text-center">
//           <h2 className="text-xl font-bold text-slate-900">Medical Store</h2>
//           <p className="mt-2 text-sm text-slate-600">
//             Medical equipment and product listings will be added here.
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-12 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
//         <p>
//           © {new Date().getFullYear()} CareBridge. Made with care for better
//           wellbeing.
//         </p>
//         <p className="mt-2">
//           For medical emergencies, contact your local emergency service.
//         </p>
//       </footer>
//     </main>
//   );
// }

// export default Home;



import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiHeart,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiUser,
  FiVideo,
  FiClock,
} from "react-icons/fi";

const services = [
  {
    icon: FiActivity,
    title: "Health Checker",
    description:
      "Share your symptoms and explore general health information and suitable next steps.",
    link: "#health-checker",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: FiUser,
    title: "Find a Doctor",
    description:
      "Discover healthcare professionals and request appointments based on your needs.",
    link: "#doctors",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: FiHeart,
    title: "Mental Wellbeing",
    description:
      "Take care of your emotional health with counseling videos and self-care resources.",
    link: "#counseling",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: FiVideo,
    title: "Online Consultation",
    description:
      "Explore online consultation options and connect with healthcare professionals.",
    link: "#doctors",
    color: "bg-violet-50 text-violet-700",
  },
  {
    icon: FiBookOpen,
    title: "Books & Resources",
    description:
      "Access useful self-help books and educational healthcare materials.",
    link: "#resources",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: FiShoppingBag,
    title: "Medical Store",
    description:
      "Explore medical equipment and healthcare essentials in one place.",
    link: "#shop",
    color: "bg-emerald-50 text-emerald-700",
  },
];

const steps = [
  {
    number: "01",
    title: "Explore your needs",
    description:
      "Start with health information, discover doctors or explore wellbeing resources.",
    icon: FiActivity,
  },
  {
    number: "02",
    title: "Choose your service",
    description:
      "Select a healthcare professional or service that suits your requirements.",
    icon: FiCalendar,
  },
  {
    number: "03",
    title: "Connect with care",
    description:
      "Request an appointment and access the resources you need.",
    icon: FiHeart,
  },
];

const benefits = [
  {
    icon: FiShield,
    title: "Care in one place",
    description:
      "Explore multiple healthcare services through one convenient platform.",
  },
  {
    icon: FiUser,
    title: "Doctor discovery",
    description:
      "Find healthcare professionals and explore their profiles.",
  },
  {
    icon: FiHeart,
    title: "Mental wellbeing",
    description:
      "Give emotional wellbeing the attention it deserves.",
  },
  {
    icon: FiClock,
    title: "Easy access",
    description:
      "Explore healthcare information and services at your convenience.",
  },
];

const testimonials = [
  {
    name: "Patient Experience",
    role: "Sample testimonial",
    review:
      "CareBridge brings healthcare information and useful resources together in a simple experience.",
  },
  {
    name: "Healthcare Support",
    role: "Sample testimonial",
    review:
      "Finding doctors and exploring different healthcare services feels more convenient.",
  },
  {
    name: "Wellbeing Journey",
    role: "Sample testimonial",
    review:
      "The mental wellbeing and educational resources make the platform more useful.",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* Hero Section */}
      <section id="home" className="relative isolate min-h-[650px]">

        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85"
          alt="Healthcare professional in a medical environment"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-teal-950/80 to-teal-900/35" />

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

          <div className="max-w-2xl text-white">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-teal-100 backdrop-blur-md">
              <FiHeart />
              Your health. Your wellbeing. Our care.
            </div>

            <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Healthcare that
              <span className="block text-teal-300">
                connects with you.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Welcome to CareBridge, your connected healthcare companion.
              Explore health information, discover doctors, request
              appointments and find support for your overall wellbeing.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#health-checker"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-teal-400"
              >
                Health Checker
                <FiArrowRight />
              </a>

              <a
                href="#doctors"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-teal-800"
              >
                Find a Doctor
                <FiArrowUpRight />
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-200">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-teal-300" />
                Healthcare resources
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-teal-300" />
                Doctor appointments
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-teal-300" />
                Mental wellbeing
              </span>
            </div>

          </div>

          {/* Hero Information Card */}
          <div className="mx-auto w-full max-w-md lg:ml-auto">

            <div className="rounded-3xl border border-white/30 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Welcome to
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-slate-900">
                    CareBridge
                  </h2>
                  <p className="mt-1 text-sm text-teal-700">
                    Connected healthcare platform
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <FiHeart size={30} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-5 text-white">

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <FiActivity size={25} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Your health matters
                    </h3>
                    <p className="mt-1 text-xs text-teal-100">
                      Start exploring your wellbeing
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-teal-50">
                  Get access to general health information and explore
                  healthcare services that support your needs.
                </p>

                <a
                  href="#health-checker"
                  className="mt-5 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
                >
                  Explore Health Checker
                  <FiArrowRight />
                </a>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">

                <a
                  href="#doctors"
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  <FiCalendar size={23} className="text-teal-700" />
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    Appointments
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Find doctors
                  </p>
                </a>

                <a
                  href="#counseling"
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-rose-300 hover:bg-rose-50"
                >
                  <FiHeart size={23} className="text-rose-600" />
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    Wellbeing
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Explore support
                  </p>
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-5">
        <div className="grid gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:grid-cols-3">

          <div className="flex items-center gap-3 p-3">
            <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
              <FiShield size={23} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                Connected Care
              </h3>
              <p className="text-xs text-slate-500">
                Healthcare in one place
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
              <FiUser size={23} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                Find Professionals
              </h3>
              <p className="text-xs text-slate-500">
                Explore doctor profiles
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3">
            <div className="rounded-xl bg-rose-50 p-3 text-rose-700">
              <FiHeart size={23} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">
                Holistic Wellbeing
              </h3>
              <p className="text-xs text-slate-500">
                Mind and body support
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-teal-700 uppercase">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need for a healthier journey
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Discover convenient healthcare services designed to support
              your physical health and emotional wellbeing.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}>
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition group-hover:gap-3"
                  >
                    Explore service
                    <FiArrowRight />
                  </a>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* About CareBridge */}
      <section id="about" className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare professional supporting a patient"
              className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 right-5 rounded-2xl bg-white p-5 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-teal-100 p-3 text-teal-700">
                  <FiHeart size={25} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    Care with connection
                  </p>
                  <p className="text-xs text-slate-500">
                    A connected health experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-sm font-bold tracking-[0.2em] text-teal-700 uppercase">
              About CareBridge
            </p>

            <h2 className="mt-4 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl">
              Bringing healthcare services closer to you.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              CareBridge is designed to make healthcare information and
              services easier to explore. From discovering doctors and
              requesting appointments to accessing mental wellbeing
              resources and medical essentials, our goal is to bring
              different healthcare needs together.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We believe that taking care of your health should feel
              accessible, informed and connected.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Explore general health information",
                "Discover doctors and appointment options",
                "Access mental wellbeing resources",
                "Find useful healthcare products",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FiCheckCircle className="shrink-0 text-teal-600" size={19} />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <a
              href="#services"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-800"
            >
              Discover our services
              <FiArrowRight />
            </a>
          </div>

        </div>
      </section>

      {/* Why Choose CareBridge */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-teal-700 uppercase">
              Why CareBridge
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Healthcare support with a connected approach
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-teal-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-teal-300 uppercase">
              Getting Started
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Your healthcare journey in three steps
            </h2>
            <p className="mt-4 leading-7 text-teal-100">
              Explore, choose and connect with the services that support
              your healthcare needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-teal-300">
                      {step.number}
                    </span>
                    <Icon size={30} className="text-teal-300" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-teal-100">
                    {step.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Health Checker CTA */}
      <section
        id="health-checker"
        className="scroll-mt-24 px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 to-teal-900 p-8 text-white md:p-12">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-teal-50">
                <FiActivity />
                Start with your health
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Understand your symptoms. Explore your next steps.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                Use the CareBridge Health Checker to explore general
                information about symptoms and learn when to seek
                professional medical advice.
              </p>
            </div>

            <a
              href="#doctors"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-teal-800 transition hover:bg-teal-50"
            >
              Book an Assessment
              <FiArrowRight />
            </a>

          </div>
        </div>
      </section>

      {/* Testimonials - Demo Content */}
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-teal-700 uppercase">
              User Experience
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              A connected approach to better wellbeing
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Illustrative feedback cards for the CareBridge demo.
              These are sample statements, not verified patient reviews.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} size={17} />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “{item.review}”
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-teal-700">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-teal-700 uppercase">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              We're here to help you.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Have questions about CareBridge or our services?
              Explore our platform and get in touch with our support team.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                  <FiMail size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-semibold text-slate-800">
                    support@carebridge.example
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                  <FiPhone size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Contact</p>
                  <p className="font-semibold text-slate-800">
                    Contact details coming soon
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                  <FiMapPin size={21} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Platform</p>
                  <p className="font-semibold text-slate-800">
                    CareBridge Healthcare Platform
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-teal-50 p-7 sm:p-9">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-white">
              <FiMessageCircle size={27} />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              Take the next step towards better wellbeing.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Explore the services available on CareBridge and find
              the healthcare support that suits your needs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white transition hover:bg-teal-800"
              >
                Explore Services
                <FiArrowRight />
              </a>

              <a
                href="#doctors"
                className="inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-white px-5 py-3 font-semibold text-teal-800 transition hover:bg-teal-100"
              >
                Find a Doctor
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Destination Sections */}
      <section id="doctors" className="scroll-mt-24 bg-slate-50 px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <FiUser className="mx-auto text-teal-700" size={30} />
          <h2 className="mt-3 text-xl font-bold text-slate-900">
            Find Doctors
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Doctor listings and appointment booking will be added here.
          </p>
        </div>
      </section>

      <section id="counseling" className="scroll-mt-24 px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <FiHeart className="mx-auto text-rose-600" size={30} />
          <h2 className="mt-3 text-xl font-bold text-slate-900">
            Mental Wellbeing & Counseling
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Counseling videos and wellbeing resources will be added here.
          </p>
        </div>
      </section>

      <section id="resources" className="scroll-mt-24 px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <FiBookOpen className="mx-auto text-amber-600" size={30} />
          <h2 className="mt-3 text-xl font-bold text-slate-900">
            Books & Resources
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Self-help books and educational resources will be added here.
          </p>
        </div>
      </section>

      <section id="shop" className="scroll-mt-24 bg-slate-50 px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <FiShoppingBag className="mx-auto text-emerald-600" size={30} />
          <h2 className="mt-3 text-xl font-bold text-slate-900">
            Medical Store
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Medical equipment and healthcare products will be added here.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 pt-14 pb-8 text-slate-300 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-white">
                <FiHeart size={23} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                CareBridge
              </h2>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Connecting healthcare services, medical information and
              wellbeing resources in one convenient platform.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a href="#home" className="transition hover:text-teal-300">Home</a>
              <a href="#about" className="transition hover:text-teal-300">About Us</a>
              <a href="#services" className="transition hover:text-teal-300">Services</a>
              <a href="#doctors" className="transition hover:text-teal-300">Find Doctors</a>
              <a href="#counseling" className="transition hover:text-teal-300">Counseling</a>
              <a href="#contact" className="transition hover:text-teal-300">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Our Services</h3>
            <div className="mt-5 space-y-3 text-sm">
              <a href="#health-checker" className="block transition hover:text-teal-300">Health Checker</a>
              <a href="#doctors" className="block transition hover:text-teal-300">Doctor Appointments</a>
              <a href="#resources" className="block transition hover:text-teal-300">Books & Resources</a>
              <a href="#shop" className="block transition hover:text-teal-300">Medical Store</a>
            </div>
          </div>

        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-center text-xs leading-6 text-slate-500">
          <p>
            © {new Date().getFullYear()} CareBridge. All rights reserved.
          </p>
          <p className="mt-2">
            CareBridge provides general healthcare information and does not
            replace professional medical advice or emergency care.
          </p>
        </div>

      </footer>

    </main>
  );
}

export default Home;
