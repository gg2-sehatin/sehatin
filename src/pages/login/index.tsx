import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';

import SignInForm from 'components/Signin';
import useAuth from "hooks/useAuth";

type LocationProps = {
  state: {
    from: Location;
  };
};

function Login() {
  const { setAuth } =  useAuth();

  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;
  const from = location.state?.from?.pathname || '/';

  const formik = useFormik({
    initialValues: {
      email:"",
      password: "",
    },
    onSubmit: (values) => {
      fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify((values))
      })
        .then(res => res.json())
        .then(data => {
          // eslint-disable-next-line no-console
          console.log(data.user);
          const { name, email, role } = data.user;
          setAuth?.({ name, email, role });
          navigate(from, { replace: true });
        })
    }
  });

  return (
    <SignInForm
      onChange={formik.handleChange}
      emailValue={formik.values.email}
      passwordValue={formik.values.password}
      onSubmit={formik.handleSubmit}
    />
  )
}

export default Login;