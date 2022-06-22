import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/login";
import Register from "pages/register";
import PageNotFound from "pages/page404";

//PatientStatusReservation
import StatusReservationNotRegister from "pages/PatientPage/StatusReservationNotRegister";
import StatusReservationFormRegister from "pages/PatientPage/StatusReservationFormRegister";
import StatusReservationOnWaiting from "pages/PatientPage/StatusReservationOnWaiting";
import StatusReservationNotOpen from "pages/PatientPage/StatusReservationNotOpenYet";
import StatusReservationFullQueue from "pages/PatientPage/StatusReservationFullQueue";
import StatusReservationSuccessRegister from "pages/PatientPage/StatusReservationSuccessRegister";

// Doctor
import EmrHistory from "pages/doctor/emrHistory";
import EmrDetail from "pages/doctor/emrDetail";

// Receptionist
import QueueMedicine from "pages/receptionist/queueMedicine";

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
        <Route path="/patient" element={<StatusReservationNotRegister />} />
        <Route path="/form" element={<StatusReservationFormRegister />} />
        <Route
          path="/statusonwaiting"
          element={<StatusReservationOnWaiting />}
        />
        <Route path="/statusnotopen" element={<StatusReservationNotOpen />} />
        <Route
          path="/statusfullqueue"
          element={<StatusReservationFullQueue />}
        />
        <Route
          path="/statussuccess"
          element={<StatusReservationSuccessRegister />}
        />
        {/* End PatientStatusReservation Routes */}

        <Route path="/" element={<Login />} />
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
