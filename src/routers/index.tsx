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

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Root path should be <Login /> or <Register />. Below is just for example */}
        <Route path="/" element={<Login />} />
        <Route path="/daftar" element={<Register />} />

        {/* Catch all */}
        <Route path="*" element={<PageNotFound />} />
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
      </Routes>
    </Router>
  );
};

export default Routers;
