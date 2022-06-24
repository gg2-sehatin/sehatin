// Doctor
import EmrHistory from 'pages/doctor/emrHistory';
import EmrDetail from 'pages/doctor/emrDetail';
import CreateNewEmr from 'pages/doctor/createNewEmr';

// Receptionist
import QueueMedicine from 'pages/receptionist/queueMedicine';

// Admin

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

export const PatientRoutes: RouterState[] = [
  {
    path: "/",
    element: <PatientPage />
  }
]