import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DoctorRoutes, ReceptionistRoutes } from './root.routers';
import useAuth from 'hooks/useAuth';
import { IAuthContext } from 'context/AuthProvider';

import Login from 'pages/login';
import Register from 'pages/register';
import PageNotFound from 'pages/page404';

const renderRoutes = (auth: IAuthContext) => {
  if (auth.role === "doctor" && auth.accessToken !== "") {
    return (
      (
        <>
          {DoctorRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </>
      )
    )
  }

  if (auth.role === "receptionist" && auth.accessToken !== "") {
    return (
      (
        <>
          {ReceptionistRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </>
      )
    )
  }

  // if (auth.role === "admin" && auth.accessToken !== "") {
  //   return (
  //     (
  //       <>
  //         {AdminRoutes.map((route, index) => (
  //           <Route key={index} path={route.path} element={route.element} />
  //         ))}
  //       </>
  //     )
  //   )
  // }

  // if (auth.role === "patient" && auth.accessToken !== "") {
  //   return (
  //     (
  //       <>
  //         {PatientRoutes.map((route, index) => (
  //           <Route key={index} path={route.path} element={route.element} />
  //         ))}
  //       </>
  //     )
  //   )
  // }
}

const Routers = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (Object.keys(user).length !== 0) {
      setAuth?.(user);
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {
          auth.role !== "" && auth.accessToken !== ""
            ? renderRoutes(auth)
            : (
              <>
                <Route path='/' element={<Login />} />
                <Route path='/daftar' element={<Register />} />
              </>
            )
        }
        {/* Catch all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
