import { Text } from "@chakra-ui/react";
import ReservationStatusFormRegister from "components/organisms/ReservationRegistrationForm";
import SidebarWithHeader from "components/Sidebar";
import { useFormik } from "formik";
import useAuth from "hooks/useAuth";

const FormRegister = () => {
  const { auth } = useAuth();

  const formik = useFormik({
    initialValues: {
      tanggal: "",
      jam: "",
      id_pasien: auth.id,
    },

    onSubmit: (values) => {
      fetch("http://localhost:3001/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        // eslint-disable-next-line no-console
        .then((data) => console.log(data));
    }
  })

  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Form Reservasi
      </Text>

      <ReservationStatusFormRegister
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        values={formik.values}
      />
    </SidebarWithHeader>
  );
};

export default FormRegister;
