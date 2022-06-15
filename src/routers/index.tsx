import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminPage from 'pages/AdminPage';
import PatientPage from 'pages/PatientPage';

// Doctor
import EmrHistory from 'pages/doctor/emrHistory';
import EmrDetail from 'pages/doctor/emrDetail';
const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Root path should be <Login /> or <Register />. Below is just for example */}
        <Route path='/' element={<AdminPage />} />
        <Route path='/patient' element={<PatientPage />} />

        {/* Doctor Routes */}
        <Route path='/emr-history' element={<EmrHistory />} />
        <Route path='/emr-history/:id' element={<EmrDetail />} />
        {/* End Doctor Routes */}

        {/* Catch all */}
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
};

export default Routers;
