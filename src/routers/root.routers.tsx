// Doctor
import EmrHistory from 'pages/doctor/emrHistory';
import EmrDetail from 'pages/doctor/emrDetail';
import CreateNewEmr from 'pages/doctor/createNewEmr';

// Receptionist
import QueueMedicine from 'pages/receptionist/queueMedicine';

// Admin
import AdminPage from 'pages/AdminPage';

// Patient
import PatientPage from 'pages/PatientPage';

export type RouterState = {
  path: string;
  element: JSX.Element;
}

export const DoctorRoutes: RouterState[] = [
  {
    path: "/",
    element: <EmrHistory />,
  },
  {
    path: "/emr-history/:id",
    element: <EmrDetail />
  },
  {
    path: "/add-emr",
    element: <CreateNewEmr />
  }
]

export const ReceptionistRoutes: RouterState[] = [
  {
    path: "/",
    element: <QueueMedicine />
  }
]

export const AdminRoutes: RouterState[] = [
  {
    path: "/",
    element: <AdminPage />
  }
]

export const PatientRoutes: RouterState[] = [
  {
    path: "/",
    element: <PatientPage />
  }
]