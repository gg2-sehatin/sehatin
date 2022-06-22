import { useFormik } from "formik";

import RegisterForm from "components/Register";
import ModalDialogue from "components/ModalDialouge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
  const [ show, setShow ] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate("/");
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      birthplace: "",
      birthday: "",
      phone: 0,
      email:"",
      password: "",
      password2: "",
      role: "patient"
    },
    onSubmit: (values) => {
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify((values))
      })
        .then(res => res.json())
        .then(data => {
          // eslint-disable-next-line no-console
          console.log(data)
          setShow(true)
        })
    }
  });

  return (
    <>
      <RegisterForm
        nameValue={formik.values.name}
        genderValue={formik.values.gender}
        birthplaceValue={formik.values.birthplace}
        birthdayValue={formik.values.birthday}
        phoneValue={formik.values.phone}
        emailValue={formik.values.email}
        passValue={formik.values.password}
        secondPassValue={formik.values.password2}
        onChange={formik.handleChange}
        onSubmit={formik.handleSubmit}
      />
      {show ?
        <ModalDialogue
          title='Pendaftaran akun berhasil!'
          message='Kamu telah berhasil membuat akun kamu, silahkan lakukan login terlebih dahulu.'
          onClose={handleCloseModal}
        /> : null}
    </>
  )
}

export default Register;