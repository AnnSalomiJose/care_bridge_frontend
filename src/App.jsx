// import { Routes, Route, Navigate } from 'react-router-dom';

// import Navbar from '../src/components/common/Navbar';
// import Home from '../src/pages/Home';
// import Login from '../src/pages/Login';
// import Register from '../src/pages/Register';
// import UserDashboard from './pages/UserDashboard';
// import AdminDashboard from './pages/AdminDashboard';
// import DoctorDashboard from './pages/DoctorDashboard';
// import HealthChecker from './pages/HealthChecker';
// import DoctorDetails from './pages/Doctordetails';
// import Doctors from './pages/Doctors';
// import AppointmentBooking from './pages/AppointmentBooking';
// import Counseling from './pages/Counseling';
// import Books from './pages/Book';
// import MedicalStore from './pages/MedicalStore';
// import Cart from './pages/Cart';
// import UserProfile from './pages/UserProfile';
// import UserAppointments from './pages/UserAppointments';
// import UserDashboardLayout from './pages/UserDashboardLayout';
// import UserDashboardHome from './pages/UserDashboardHome';
// import UserSettings from './pages/UserSettings';
// import AdminDashboardLayout from './pages/AdminDashboardLayout';
// import AdminDashboardHome from './pages/AdminDashboardHome';
// import AdminDoctors from './pages/AdminDoctors';
// import AdminUsers from './pages/AdminUsers';
// import AdminAppointments from './pages/AdminAppointments';
// import AdminProducts from './pages/AdminProducts';
// import AdminOrders from './pages/AdminOrders';
// import AdminPayments from './pages/AdminPayments';
// import AdminCounseling from './pages/AdminCounseling';
// import AdminBooksResources from './pages/AdminBooksResources';
// import AdminReports from './pages/AdminReports';
// import AdminSettings from './pages/AdminSettings';
// import DoctorAvailability from './pages/DoctorAvailability';
// import DoctorProfile from './pages/DoctorProfile';
// import DoctorSettings from './pages/DoctorSettings';




// function AppRoutes() {
//   return (
//     <Routes>
//       {/* Common Home Page */}
//       <Route path="/" element={<><Navbar />
//       <Home /></>
//         }
//       />

//       {/* Login Page */}
//       <Route path="/login" element={<Login />} />

//       {/* Register Page */}
//       <Route path="/register" element={<Register />} />
// <Route path="/user-dashboard"element={<UserDashboardLayout />}
// >
//   {/* Dashboard Home */}
//   <Route index element={<UserDashboardHome />}/>

//   {/* My Appointments */}
//   <Route
//     path="appointments"
//     element={<UserAppointments />}
//   />

//   {/* Health Checker */}
//   <Route
//     path="health-checker"
//     element={<HealthChecker />}
//   />

//   {/* Counseling */}
//   <Route
//     path="counseling"
//     element={<Counseling />}
//   />

//   {/* Books & Resources */}
//   <Route
//     path="books"
//     element={<Books />}
//   />

//   {/* Medical Store */}
//   <Route
//     path="shop"
//     element={<MedicalStore />}
//   />

//   {/* My Profile */}
//   <Route
//     path="profile"
//     element={<UserProfile />}
//   />
//   <Route
//   path="settings"
//   element={<UserSettings />}
// />

//   Find Doctors
//   <Route
//     path="doctors"
//     element={<Doctors />}
//   />

//   {/* Doctor Details */}
//   <Route
//     path="doctors/:id"
//     element={<DoctorDetails />}
//   />

//   {/* Appointment Booking */}
//   <Route
//     path="book-appointment/:id"
//     element={<AppointmentBooking />}
//   />


//   {/* Cart */}
//   <Route
//     path="cart"
//     element={<Cart />}
//   />

  
// </Route>
// <Route
//   path="settings"
//   element={<UserSettings />}
// />
// {/* Doctor Dashboard */}
// <Route
//   path="/doctor-dashboard"
//   element={<DoctorDashboard />}
// >
//   <Route index element={<DoctorDashboard />} />
//    <Route index element={<></>} />
//   <Route
//     path="appointments"
//     element={<div>Doctor Appointments</div>}
//   />

//   <Route
//     path="availability"
//     element={<DoctorAvailability />}
//   />

//   <Route
//     path="profile"
//     element={<DoctorProfile />}
//   />

//   <Route
//     path="settings"
//     element={<DoctorSettings />}
//   />
// </Route>

//       {/* Health Checker */}
//       <Route
//         path="/health-checker"
//         element={
//           <>
//             <Navbar />
//             <HealthChecker />
//           </>
//         }
//       />
//       <Route
//   path="/user-profile"
//   element={
//     <>
//       <Navbar />
//       <UserProfile />
//     </>
//   }
// />
// <Route
//   path="appointments"
//   element={<UserAppointments />}
// />
//       <Route
//   path="/cart"
//   element={
//     <>
//       <Navbar />
//       <Cart />
//     </>
//   }
// />

// <Route
//   path="/admin-dashboard"
//   element={<AdminDashboardLayout />}
// >
//   <Route index element={<AdminDashboardHome />} />
// <Route
//   path="users"
//   element={<AdminUsers />}
// />
//   <Route
//   path="doctors"
//   element={<AdminDoctors />}

// />
// <Route path="appointments" element={<AdminAppointments />} />
// <Route path="products" element={<AdminProducts />} />
// <Route path="orders" element={<AdminOrders />} />
// <Route path="payments" element={<AdminPayments />} />
// <Route path="counseling" element={<AdminCounseling />} />
// <Route path="books" element={<AdminBooksResources />} />
// <Route path="reports" element={<AdminReports />} />
// <Route path="settings" element={<AdminSettings />} />

// </Route>
//        {/* Find Doctors */}
// <Route
//   path="/doctors"
//   element={
//     <>
//       <Navbar />
//       <Doctors />
//     </>
//   }
// />

// {/* Appointment Booking */}
// <Route
//   path="/book-appointment/:id"
//   element={
//     <>
//       <Navbar />
//       <AppointmentBooking />
//     </>
//   }
// />

// {/* Doctor Details */}
// <Route
//   path="/doctors/:id"
//   element={
//     <>
//       <Navbar />
//       <DoctorDetails />
//     </>
//   }

// />
// {/* Counseling */}
// <Route
//   path="/counseling"
//   element={
//     <>
//       <Navbar />
//       <Counseling />
//     </>
//   }
// />
// {/* Medical Store */}
// <Route
//   path="/shop"
//   element={
//     <>
//       <Navbar />
//       <MedicalStore />
//     </>
//   }
// />
// {/* Books and Resources */}
// <Route
//   path="/books"
//   element={
//     <>
//       <Navbar />
//       <Books />
//     </>
//   }
// />
//       {/* Unknown URL - redirect to Home */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

// export default AppRoutes;



import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from '../src/components/common/Navbar';

import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';

import HealthChecker from '../src/pages/HealthChecker';
import DoctorDetails from '../src/pages/DoctorDetails';
import Doctors from '../src/pages/Doctors';
import AppointmentBooking from '../src/pages/AppointmentBooking';
import Counseling from '../src/pages/Counseling';
import Books from '../src/pages/Book';
import MedicalStore from '../src/pages/MedicalStore';
import Cart from '../src/pages/Cart';

import UserProfile from '../src/pages/UserProfile';
import UserAppointments from '../src/pages/UserAppointments';
import UserDashboardLayout from '../src/pages/UserDashboardLayout';
import UserDashboardHome from '../src/pages/UserDashboardHome';
import UserSettings from '../src/pages/UserSettings';

import AdminDashboardLayout from '../src/pages/AdminDashboardLayout';
import AdminDashboardHome from '../src/pages/AdminDashboardHome';
import AdminDoctors from '../src/pages/AdminDoctors';
import AdminUsers from '../src/pages/AdminUsers';
import AdminAppointments from '../src/pages/AdminAppointments';
import AdminProducts from '../src/pages/AdminProducts';
import AdminOrders from '../src/pages/AdminOrders';
import AdminPayments from '../src/pages/AdminPayments';
import AdminCounseling from '../src/pages/AdminCounseling';
import AdminBooksResources from '../src/pages/AdminBooksResources';
import AdminReports from '../src/pages/AdminReports';
import AdminSettings from '../src/pages/AdminSettings';

import DoctorDashboard from '../src/pages/DoctorDashboard';
import DoctorAvailability from '../src/pages/DoctorAvailability';
import DoctorProfile from '../src/pages/DoctorProfile';
import DoctorSettings from '../src/pages/DoctorSettings';
import DoctorAppointments from './pages/DoctorAppointments';


function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Dashboard */}
      <Route
        path="/user-dashboard"
        element={<UserDashboardLayout />}
      >
        <Route index element={<UserDashboardHome />} />

        <Route path="appointments" element={<UserAppointments />} />
        <Route path="health-checker" element={<HealthChecker />} />
        <Route path="counseling" element={<Counseling />} />
        <Route path="books" element={<Books />} />
        <Route path="shop" element={<MedicalStore />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="settings" element={<UserSettings />} />

        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<DoctorDetails />} />
        <Route path="book-appointment/:id" element={<AppointmentBooking />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      {/* Doctor Dashboard */}
      <Route
        path="/doctor-dashboard"
        element={<DoctorDashboard />}
      >
        <Route path="availability" element={<DoctorAvailability />} />
<Route path="appointments" element={<DoctorAppointments />} />
        <Route path="profile" element={<DoctorProfile />} />
        <Route path="settings" element={<DoctorSettings />} />
      </Route>

      {/* Admin Dashboard */}
      <Route
        path="/admin-dashboard"
        element={<AdminDashboardLayout />}
      >
        <Route index element={<AdminDashboardHome />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="doctors" element={<AdminDoctors />} />
        <Route path="appointments" element={<AdminAppointments />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="counseling" element={<AdminCounseling />} />
        <Route path="books" element={<AdminBooksResources />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Public Pages */}
      <Route
        path="/health-checker"
        element={
          <>
            <Navbar />
            <HealthChecker />
          </>
        }
      />

      <Route
        path="/user-profile"
        element={
          <>
            <Navbar />
            <UserProfile />
          </>
        }
      />

      <Route
        path="/appointments"
        element={
          <>
            <Navbar />
            <UserAppointments />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <Cart />
          </>
        }
      />

      <Route
        path="/doctors"
        element={
          <>
            <Navbar />
            <Doctors />
          </>
        }
      />

      <Route
        path="/book-appointment/:id"
        element={
          <>
            <Navbar />
            <AppointmentBooking />
          </>
        }
      />

      <Route
        path="/doctors/:id"
        element={
          <>
            <Navbar />
            <DoctorDetails />
          </>
        }
      />

      <Route
        path="/counseling"
        element={
          <>
            <Navbar />
            <Counseling />
          </>
        }
      />

      <Route
        path="/shop"
        element={
          <>
            <Navbar />
            <MedicalStore />
          </>
        }
      />

      <Route
        path="/books"
        element={
          <>
            <Navbar />
            <Books />
          </>
        }
      />

      {/* Unknown URL */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default AppRoutes;


