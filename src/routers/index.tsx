import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'pages/login';
import Register from 'pages/register';
import PageNotFound from 'pages/page404';
import Admin from 'pages/admin';
import Obat from 'pages/admin/obat';
import Pelayanan from 'pages/admin/pelayanan';

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Root path should be <Login /> or <Register />. Below is just for example */}
        <Route path='/' element={<Login />} />
        <Route path='/daftar' element={<Register />} />				

        {/* Admin Routes */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/obat' element={<Obat />} />
        <Route path='/pelayanan' element={<Pelayanan />} />

        {/* Catch all */}
        <Route path='*' element={<PageNotFound />} />	
      </Routes>
    </Router>
  );
};

export default Routers;
