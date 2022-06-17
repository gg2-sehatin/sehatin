import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'pages/login';
import Register from 'pages/register';
import PageNotFound from 'pages/page404';

// Doctor
import EmrHistory from 'pages/doctor/emrHistory';
import EmrDetail from 'pages/doctor/emrDetail';

// Receptionist
import QueueMedicine from 'pages/receptionist/queuemedicine';

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Root path should be <Login /> or <Register />. Below is just for example */}
        <Route path='/' element={<Login />} />
        <Route path='/daftar' element={<Register />} />	

        {/* Doctor Routes */}
        <Route path='/emr-history' element={<EmrHistory />} />
        <Route path='/emr-history/:id' element={<EmrDetail />} />
        {/* End Doctor Routes */}

        {/* Recepcionist Routes */}
        <Route path='/queue-medicine' element={<QueueMedicine />} />
        {/* End Recepcionist Routes */}

        {/* Catch all */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Routers;
