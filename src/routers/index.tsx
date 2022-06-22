import { Routes, Route, Outlet } from 'react-router-dom';
import RequireAuth from 'components/RequireAuth';

// Public
import Login from 'pages/login';
import Register from 'pages/register';
import PageNotFound from 'pages/page404';
import Unauthorized from 'pages/unauthorized';

// Doctor
import EmrHistory from 'pages/doctor/emrHistory';
import EmrDetail from 'pages/doctor/emrDetail';

// Receptionist
import QueueMedicine from 'pages/receptionist/queueMedicine';

// Admin
import AdminPage from 'pages/AdminPage';

// Patient
import PatientPage from 'pages/PatientPage';

const Routers = () => {

  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route path='login' element={<Login />} />
        <Route path='daftar' element={<Register />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* Doctor Routes */}
        <Route element={<RequireAuth allowedRoles='doctor' />}>
          <Route path='/' element={<EmrHistory />} />
          <Route path='doctor/emr-history/:id' element={<EmrDetail />} />
        </Route>
        {/* End Doctor Routes */}

        {/* Receptionist Routes */}
        <Route element={<RequireAuth allowedRoles='receptionist' />}>
          <Route path='receptionist' element={<QueueMedicine />} />
        </Route>
        {/* End Receptionist Routes */}

        {/* Patient Routes */}
        <Route element={<RequireAuth allowedRoles='patient' />}>
          <Route path='patient' element={<PatientPage />} />
        </Route>
        {/* End Patient Routes */}

        {/* Admin Routes */}
        <Route element={<RequireAuth allowedRoles='admin' />}>
          <Route path='admin' element={<AdminPage />} />
        </Route>
        {/* End Admin Routes */}

        {/* Catch all */}
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Routers;
