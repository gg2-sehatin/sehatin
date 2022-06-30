// Doctor
import EmrHistory from 'pages/doctor/emrHistory';
import EmrDetail from 'pages/doctor/emrDetail';
import CreateNewEmr from 'pages/doctor/createNewEmr';
import PatientQueue from 'pages/doctor/patientQueue';

// Receptionist
import QueueMedicine from 'pages/receptionist/queueMedicine';
import Incoming from "pages/receptionist/IncomingReservation";
import Antrian from "pages/receptionist/QueuePatient";
import BillingPayment from "pages/receptionist/billingpayment";

// Admin
import AdminHome from 'pages/administration';
import Medicine from 'components/molecules/AdminMedicineList';
import MedicineForm from 'components/organisms/MedicineForm';
import Schedule from 'components/molecules/ScheduleList';
import ScheduleForm from 'components/organisms/ScheduleForm';
import User from 'components/molecules/AdminUser';
import UserForm from 'components/organisms/AdminUserForm';

// Patient
import NotRegistered from "pages/PatientPage/ReservationStatusNotRegister";
import FormRegister from "pages/PatientPage/ReservationStatusFormRegister";
import Waiting from "pages/PatientPage/ReservationStatusOnWaiting";
import NotOpenYet from "pages/PatientPage/ReservationStatusNotOpenYet";
import QueueFull from "pages/PatientPage/ReservationStatusFullQueue";
import RegistrationSuccess from "pages/PatientPage/ReservationStatusSuccessRegister";
import MySchedule from 'pages/PatientPage/schedule';
import MyEmr from 'pages/PatientPage/myEmr';
import MyEmrDetail from 'pages/PatientPage/myEmrDetail';

export type RouterState = {
  path: string;
  element: JSX.Element;
}

export const PatientRoutes: RouterState[] = [
  {
    path: '/',
    element: <MySchedule />
  },
  {
    path: '/my-emr',
    element: <MyEmr />
  },
  {
    path: '/my-emr/:id',
    element: <MyEmrDetail />
  },
  {
    path: "/not-registered",
    element: <NotRegistered />
  },
  {
    path: "/form-reservasi",
    element: <FormRegister />
  },
  {
    path: "/waiting",
    element: <Waiting />
  },
  {
    path: "/not-open-yet",
    element: <NotOpenYet />
  },
  {
    path: "/queue-full",
    element: <QueueFull />
  },
  {
    path: "/registration-success",
    element: <RegistrationSuccess />
  }
]

export const DoctorRoutes: RouterState[] = [
  {
    path: "/",
    element: <PatientQueue />,
  },
  {
    path: "/emr-history",
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

export const AdminRoutes: RouterState[] = [
  {
    path: "/",
    element: <AdminHome />,
  },
  {
    path: "/medicine",
    element: <Medicine />,
  },
  {
    path: "/medicine/create",
    element: <MedicineForm />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/schedule/create",
    element: <ScheduleForm />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/user/create",
    element: <UserForm />,
  },{
    path: "/user/edit/:id",
    element: <UserForm />,
  }
]

export const ReceptionistRoutes: RouterState[] = [
  {
    path: "/",
    element: <Incoming />
  },
  {
    path: "/queue-patient",
    element: <Antrian />
  },
  {
    path: "/queue-medicine",
    element: <QueueMedicine />
  },
  {
    path: "/billing-payment",
    element: <BillingPayment />
  }
]