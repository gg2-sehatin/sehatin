import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

type RequireAuthProps = {
  allowedRoles?: string;
}

const RequireAuth = ({allowedRoles}: RequireAuthProps) => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth?.role === allowedRoles
      ? <Outlet />
      : <Navigate to="/login" state={{from: location}} replace />
  );
}

export default RequireAuth;