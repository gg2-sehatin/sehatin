import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/login";
import Register from "pages/register";
import PageNotFound from "pages/page404";

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
        <Route path="/incoming-reservation" element={<Incoming />} />
        <Route path="/antrian-pasien" element={<Antrian />} />

        {/* Catch all */}
        <Route path="*" element={<h1>Not found</h1>} />
        <Route path="/" element={<Login />} />
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
