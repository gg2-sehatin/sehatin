import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/login";
import Register from "pages/register";
import PageNotFound from "pages/page404";

//PatientReservationStatus
import NotRegistered from "pages/PatientPage/ReservationStatusNotRegister";
import FormRegister from "pages/PatientPage/ReservationStatusFormRegister";
import Waiting from "pages/PatientPage/ReservationStatusOnWaiting";
import NotOpenYet from "pages/PatientPage/ReservationStatusNotOpenYet";
import QueueFull from "pages/PatientPage/ReservationStatusFullQueue";
import RegistrationSuccess from "pages/PatientPage/ReservationStatusSuccessRegister";

// Administrator
import AdminHome from "pages/administration";
import Medicine from "molecules/AdminMedicineList";
import MedicineForm from "organisms/MedicineForm";
import Schedule from "molecules/ScheduleList";
import ScheduleForm from "organisms/ScheduleForm";
import User from "molecules/AdminUser";
import UserForm from "organisms/AdminUserForm";

// Doctor
import EmrHistory from "pages/doctor/emrHistory";
import EmrDetail from "pages/doctor/emrDetail";

// Receptionist
import QueueMedicine from "pages/Receptionist/queuemedicine";
import Incoming from "pages/Receptionist/IncomingReservation";
import Antrian from "pages/Receptionist/QueuePatient";
import BillingPayment from "pages/Receptionist/Billingpayment";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Root path should be <Login /> or <Register />. Below is just for example */}
        <Route path="/" element={<Login />} />
        <Route path="/daftar" element={<Register />} />

        {/* Catch all */}
        <Route path="*" element={<PageNotFound />} />

        {/* PatientStatusReservation Routes */}
        <Route path="/patient" element={<NotRegistered />} />
        <Route path="/form" element={<FormRegister />} />
        <Route path="/statusonwaiting" element={<Waiting />} />
        <Route path="/statussuccess" element={<RegistrationSuccess />} />
        <Route path="/statusnotopen" element={<NotOpenYet />} />
        <Route path="/statusfullqueue" element={<QueueFull />} />
        {/* End PatientStatusReservation Routes */}

        <Route path="/" element={<Login />} />
        <Route path="/daftar" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/medicine-form" element={<MedicineForm />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule-form" element={<ScheduleForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-form" element={<UserForm />} />

        {/* Patients Routes */}
        <Route path="/daftar" element={<Register />} />

        {/* Doctor Routes */}
        <Route path="/emr-history" element={<EmrHistory />} />
        <Route path="/emr-history/:id" element={<EmrDetail />} />
        {/* End Doctor Routes */}

        {/* Recepcionist Routes */}
        <Route path="/queue-medicine" element={<QueueMedicine />} />
        <Route path="/incoming-reservation" element={<Incoming />} />
        <Route path="/antrian-pasien" element={<Antrian />} />
        <Route path="/billing-payment" element={<BillingPayment />} />
        {/* End Recepcionist Routes */}

        {/* Catch all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
