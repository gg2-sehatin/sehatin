import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Resepsionis
import Incoming from "pages/resepsionis/incoming";
import Antrian from "pages/resepsionis/antrian";

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Root path should be <Login /> or <Register />. Below is just for example */}

        <Route path="/incoming-reservation" element={<Incoming />} />
        <Route path="/antrian-pasien" element={<Antrian />} />

        {/* Catch all */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
};

export default Routers;
