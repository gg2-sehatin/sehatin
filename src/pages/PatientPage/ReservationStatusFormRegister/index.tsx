import { Text } from "@chakra-ui/react";
import ReservationStatusFormRegister from "components/organisms/ReservationRegistrationForm";
import SidebarWithHeader from "components/Sidebar";
import { useFormik } from "formik";
import useAuth from "hooks/useAuth";
import ModalDialogue from "components/ModalDialogue";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormRegister = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      tanggal: "",
      jam: "",
      idPasien: auth.id,
      nama: auth.name,
      status: "Diperiksa",
    },
    onSubmit: (values) => {
      fetch("http://localhost:3001/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      setShow(true);
    }
  })

  const handleCloseModal = () => {
    setShow(false);
    navigate("/");
  }

  return (
    <>
      <SidebarWithHeader>
        <Text fontSize="xl" fontWeight="bold" mb="8px">
          Form Reservasi
        </Text>

        <ReservationStatusFormRegister
          onSubmit={formik.handleSubmit}
          onChange={formik.handleChange}
          tanggal={formik.values.tanggal}
          jam={formik.values.jam}
        />
      </SidebarWithHeader>
      {show ?
        <ModalDialogue
          title='Reservasi berhasil!'
          message='Silahkan datang ke klinik dengan waktu dan jam yang telah dipilih.'
          onClose={handleCloseModal}
        /> : null}
    </>
  );
};

export default FormRegister;
