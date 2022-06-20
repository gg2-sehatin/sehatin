import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/login";
import Register from "pages/register";
import PageNotFound from "pages/page404";
import StatusReservationNotRegister from "pages/PatientPage/StatusReservationNotRegister";
import StatusReservationFormRegister from "pages/PatientPage/StatusReservationFormRegister";

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
      </Routes>
    </Router>
  );
};

export default Routers;
