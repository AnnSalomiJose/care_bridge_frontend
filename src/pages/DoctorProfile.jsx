
// import { useState } from "react";
// import {
//   FiUser,
//   FiEdit2,
//   FiSave,
//   FiCheckCircle,
//   FiBriefcase,
//   FiMail,
//   FiPhone,
//   FiMapPin,
// } from "react-icons/fi";

// const initialProfile = {
//   name: "Dr. Rahul Menon",
//   email: "rahul@example.com",
//   phone: "+91 9876543210",
//   specialization: "General Physician",
//   qualification: "MBBS, MD",
//   experience: "8",
//   hospital: "City Medical Centre",
//   address: "Thrissur, Kerala",
//   consultationFee: "500",
//   about:
//     "Experienced medical professional dedicated to providing quality healthcare and patient care.",
// };

// function DoctorProfile() {
//   const [profile, setProfile] = useState(initialProfile);
//   const [isEditing, setIsEditing] = useState(false);
//   const [saved, setSaved] = useState(false);

//   const handleChange = (e) => {
//     setProfile({
//       ...profile,
//       [e.target.name]: e.target.value,
//     });
//     setSaved(false);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//     setSaved(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

//       {/* Header */}
//       <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">
//             My Profile
//           </h1>
//           <p className="mt-1 text-sm text-gray-500">
//             View and manage your professional profile.
//           </p>
//         </div>

//         {!isEditing ? (
//           <button
//             type="button"
//             onClick={() => {
//               setIsEditing(true);
//               setSaved(false);
//             }}
//             className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
//           >
//             <FiEdit2 size={17} />
//             Edit Profile
//           </button>
//         ) : (
//           <button
//             type="submit"
//             form="doctor-profile-form"
//             className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
//           >
//             <FiSave size={17} />
//             Save Changes
//           </button>
//         )}
//       </div>

//       {/* Profile Card */}
//       <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
//         <div className="flex flex-col items-center gap-4 sm:flex-row">
//           <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-blue-700">
//             <FiUser size={42} />
//           </div>

//           <div className="text-center sm:text-left">
//             <h2 className="text-xl font-bold text-gray-800">
//               {profile.name}
//             </h2>

//             <p className="mt-1 text-sm text-blue-600">
//               {profile.specialization}
//             </p>

//             <p className="mt-1 text-sm text-gray-500">
//               {profile.qualification}
//             </p>

//             <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
//               Doctor Profile
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Profile Form */}
//       <form
//         id="doctor-profile-form"
//         onSubmit={handleSave}
//         className="space-y-6"
//       >

//         {/* Personal Information */}
//         <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
//           <div className="mb-5 flex items-center gap-3">
//             <FiUser className="text-blue-600" size={22} />
//             <div>
//               <h2 className="text-lg font-bold text-gray-800">
//                 Personal Information
//               </h2>
//               <p className="text-sm text-gray-500">
//                 Your basic contact details.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={profile.name}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div>
//               <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
//                 <FiMail size={15} /> Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div>
//               <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
//                 <FiPhone size={15} /> Contact Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={profile.phone}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div>
//               <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
//                 <FiMapPin size={15} /> Location
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={profile.address}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Professional Information */}
//         <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
//           <div className="mb-5 flex items-center gap-3">
//             <FiBriefcase className="text-blue-600" size={22} />
//             <div>
//               <h2 className="text-lg font-bold text-gray-800">
//                 Professional Information
//               </h2>
//               <p className="text-sm text-gray-500">
//                 Your medical qualifications and experience.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 Specialization
//               </label>
//               <input
//                 type="text"
//                 name="specialization"
//                 value={profile.specialization}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 required
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 Qualification
//               </label>
//               <input
//                 type="text"
//                 name="qualification"
//                 value={profile.qualification}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 Experience (Years)
//               </label>
//               <input
//                 type="number"
//                 name="experience"
//                 min="0"
//                 value={profile.experience}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 Consultation Fee (₹)
//               </label>
//               <input
//                 type="number"
//                 name="consultationFee"
//                 min="0"
//                 value={profile.consultationFee}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 Hospital / Clinic Name
//               </label>
//               <input
//                 type="text"
//                 name="hospital"
//                 value={profile.hospital}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>

//             <div className="md:col-span-2">
//               <label className="mb-2 block text-sm font-medium text-gray-700">
//                 About Me
//               </label>
//               <textarea
//                 name="about"
//                 rows="4"
//                 value={profile.about}
//                 onChange={handleChange}
//                 disabled={!isEditing}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Save / Cancel */}
//         {isEditing && (
//           <div className="flex flex-wrap gap-3">
//             <button
//               type="submit"
//               className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
//             >
//               <FiSave size={17} />
//               Save Changes
//             </button>

//             <button
//               type="button"
//               onClick={() => {
//                 setProfile(initialProfile);
//                 setIsEditing(false);
//                 setSaved(false);
//               }}
//               className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//           </div>
//         )}

//         {saved && (
//           <p className="flex items-center gap-2 text-sm font-medium text-green-600">
//             <FiCheckCircle size={18} />
//             Profile updated successfully!
//           </p>
//         )}
//       </form>

//       <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
//         <p className="text-sm text-blue-700">
//           These profile details are currently sample frontend data.
//           Profile updates will be stored permanently during backend integration.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default DoctorProfile;




// import {
//   FiUser,
//   FiBriefcase,
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiAward,
//   FiClock,
//   FiDollarSign,
//   FiCheckCircle,
// } from "react-icons/fi";

// function DoctorProfile() {
//   const profileSections = [
//     {
//       title: "Personal Information",
//       description: "Basic personal and contact details.",
//       icon: FiUser,
//       fields: [
//         { label: "Full Name", value: "Doctor Name", icon: FiUser },
//         { label: "Email Address", value: "doctor@example.com", icon: FiMail },
//         { label: "Contact Number", value: "+91 XXXXXXXXXX", icon: FiPhone },
//         { label: "Location", value: "City, State", icon: FiMapPin },
//       ],
//     },
//     {
//       title: "Professional Information",
//       description: "Medical qualifications and professional details.",
//       icon: FiBriefcase,
//       fields: [
//         { label: "Specialization", value: "Not provided", icon: FiBriefcase },
//         { label: "Qualification", value: "Not provided", icon: FiAward },
//         { label: "Experience", value: "Not provided", icon: FiClock },
//         { label: "Consultation Fee", value: "Not provided", icon: FiDollarSign },
//         { label: "Hospital / Clinic", value: "Not provided", icon: FiMapPin },
//       ],
//     },
//   ];

//   return (
//     <div className="space-y-7">

//       {/* Header */}
//       <div>
//         <h1 className="text-2xl font-bold text-slate-900">
//           My Profile
//         </h1>

//         <p className="mt-2 text-sm text-slate-500">
//           View your personal and professional information.
//         </p>
//       </div>

//       {/* Profile Overview */}
//       <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

//         <div className="flex flex-col items-center gap-5 sm:flex-row">

//           <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-50 text-teal-700">
//             <FiUser size={42} />
//           </div>

//           <div className="text-center sm:text-left">
//             <h2 className="text-xl font-bold text-slate-900">
//               Doctor Name
//             </h2>

//             <p className="mt-1 text-sm text-teal-700">
//               Medical Professional
//             </p>

//             <p className="mt-2 text-sm text-slate-500">
//               Your professional CareBridge account.
//             </p>

//             <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
//               <FiCheckCircle size={14} />
//               Doctor Account
//             </span>
//           </div>

//         </div>
//       </section>

//       {/* Profile Information Sections */}
//       {profileSections.map((section) => {
//         const SectionIcon = section.icon;

//         return (
//           <section
//             key={section.title}
//             className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
//           >

//             {/* Section Header */}
//             <div className="mb-6 flex items-center gap-3">

//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
//                 <SectionIcon size={22} />
//               </div>

//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">
//                   {section.title}
//                 </h2>

//                 <p className="mt-1 text-sm text-slate-500">
//                   {section.description}
//                 </p>
//               </div>

//             </div>

//             {/* Information Fields */}
//             <div className="grid gap-5 sm:grid-cols-2">

//               {section.fields.map((field) => {
//                 const FieldIcon = field.icon;

//                 return (
//                   <div
//                     key={field.label}
//                     className="rounded-xl bg-slate-50 p-4"
//                   >

//                     <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
//                       <FieldIcon size={15} />
//                       {field.label}
//                     </p>

//                     <p className="mt-2 text-sm font-semibold text-slate-800">
//                       {field.value}
//                     </p>

//                   </div>
//                 );
//               })}

//             </div>

//           </section>
//         );
//       })}

//       {/* About Section */}
//       <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">

//         <div className="mb-4 flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
//             <FiUser size={22} />
//           </div>

//           <div>
//             <h2 className="text-lg font-bold text-slate-900">
//               About Me
//             </h2>

//             <p className="mt-1 text-sm text-slate-500">
//               Professional introduction.
//             </p>
//           </div>
//         </div>

//         <p className="rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
//           No professional introduction has been added yet.
//         </p>

//       </section>

//       {/* Information Note */}
//       <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
//         <p className="text-sm leading-6 text-teal-800">
//           Your profile information will be displayed here. Profile details
//           will be loaded from your registered doctor account during backend
//           integration.
//         </p>
//       </div>

//     </div>
//   );
// }

// export default DoctorProfile;


import { useState } from "react";
import {
  FiUser,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiAward,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
  FiEdit,
  FiSave,
  FiX,
} from "react-icons/fi";

function DoctorProfile() {
  const initialProfile = {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    specialization: "",
    qualification: "",
    experience: "",
    fee: "",
    hospital: "",
    about: "",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editProfile, setEditProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditProfile({ ...profile });
    setIsEditing(true);
    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    setProfile({ ...editProfile });
    setIsEditing(false);
    setMessage("Profile updated successfully!");

  };

  const handleCancel = () => {
    setEditProfile({ ...profile });
    setIsEditing(false);
    setMessage("");
  };

  const profileSections = [
    {
      title: "Personal Information",
      description: "Basic personal and contact details.",
      icon: FiUser,
      fields: [
        { label: "Full Name", name: "fullName", icon: FiUser, placeholder: "Enter your full name" },
        { label: "Email Address", name: "email", icon: FiMail, placeholder: "Enter your email", type: "email" },
        { label: "Contact Number", name: "phone", icon: FiPhone, placeholder: "Enter contact number" },
        { label: "Location", name: "location", icon: FiMapPin, placeholder: "Enter your location" },
      ],
    },
    {
      title: "Professional Information",
      description: "Medical qualifications and professional details.",
      icon: FiBriefcase,
      fields: [
        { label: "Specialization", name: "specialization", icon: FiBriefcase, placeholder: "e.g. Cardiologist" },
        { label: "Qualification", name: "qualification", icon: FiAward, placeholder: "e.g. MBBS, MD" },
        { label: "Experience", name: "experience", icon: FiClock, placeholder: "e.g. 5 years" },
        { label: "Consultation Fee (₹)", name: "fee", icon: FiDollarSign, placeholder: "Enter consultation fee", type: "number" },
        { label: "Hospital / Clinic", name: "hospital", icon: FiMapPin, placeholder: "Enter hospital or clinic name" },
      ],
    },
  ];

  return (
    <div className="space-y-7">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage your personal and professional information.
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={handleEdit}
            className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
          >
            <FiEdit size={17} />
            Edit Profile
          </button>
        )}
      </div>

      {/* Profile Overview */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-50 text-teal-700">
            <FiUser size={42} />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-slate-900">
              {profile.fullName || "Doctor Name"}
            </h2>

            <p className="mt-1 text-sm text-teal-700">
              {profile.specialization || "Medical Professional"}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Your professional CareBridge account.
            </p>

            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
              <FiCheckCircle size={14} />
              Doctor Account
            </span>
          </div>
        </div>
      </section>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="space-y-7">

        {profileSections.map((section) => {
          const SectionIcon = section.icon;

          return (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <SectionIcon size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {section.fields.map((field) => {
                  const FieldIcon = field.icon;

                  return (
                    <div key={field.name}>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                        <FieldIcon size={16} />
                        {field.label}
                      </label>

                      {isEditing ? (
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={editProfile[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          min={field.type === "number" ? "0" : undefined}
                          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                        />
                      ) : (
                        <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                          {profile[field.name] || "Not provided"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* About Me */}
        <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <FiUser size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                About Me
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Professional introduction.
              </p>
            </div>
          </div>

          {isEditing ? (
            <textarea
              name="about"
              value={editProfile.about}
              onChange={handleChange}
              rows="5"
              placeholder="Write a short professional introduction..."
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          ) : (
            <p className="rounded-xl bg-slate-50 p-4 text-sm leading-7 text-slate-600 whitespace-pre-wrap">
              {profile.about || "No professional introduction has been added yet."}
            </p>
          )}
        </section>

        {/* Save and Cancel Buttons */}
        {isEditing && (
          <div className="flex flex-wrap justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"
            >
              <FiX size={17} />
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
            >
              <FiSave size={17} />
              Save Changes
            </button>
          </div>
        )}
      </form>

      {/* Success Message */}
      {message && (
        <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
          <FiCheckCircle size={18} />
          {message}
        </div>
      )}

      <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
        <p className="text-sm leading-6 text-teal-800">
          Profile changes are currently saved only in frontend state.
          Permanent profile storage will be enabled during backend integration.
        </p>
      </div>

    </div>
  );
}

export default DoctorProfile;
