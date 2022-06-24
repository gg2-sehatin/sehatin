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
import AdminHome from 'pages/Administration';
import Medicine from 'components/molecules/AdminMedicineList';
import MedicineForm from 'components/organisms/MedicineForm';
import Schedule from 'components/molecules/ScheduleList';
import ScheduleForm from 'components/organisms/ScheduleForm';
import User from 'components/molecules/AdminUser';
import UserForm from 'components/organisms/AdminUserForm';

// Doctor
import EmrHistory from "pages/doctor/emrHistory";
import EmrDetail from "pages/doctor/emrDetail";

// Receptionist
import QueueMedicine from "pages/receptionist/queuemedicine";

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
        {/* End Recepcionist Routes */}

        {/* Catch all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
