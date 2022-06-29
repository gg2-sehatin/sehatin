import SidebarWithHeader from 'components/Sidebar';
import {
  Box,
  Stack,
  Container,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
  Select,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';

export default function AdminUserForm() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
      password2: '',
    },
    onSubmit: (values) => {
      if(values.password === values.password2) {
        const { name, email, password, role } = values;
        fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, role }),
        })
          .then(() => {
            alert('Berhasil menambahkan pengguna baru!')
            window.location.reload();
          })
      }
    }
  })

  return (
    <>
      <SidebarWithHeader>
        <Container
          maxW='container.xl'
          py={4}
        >
          <Box
            bg="white"
            rounded="md"
          >
            <Button onClick={handleGoBack} mb='4'>
              Kembali
            </Button>
            <Heading size='md' mb={3}>
              Tambah Pengguna Baru
            </Heading>
            <Alert status='success' mb={3}>
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor='role'>Role</FormLabel>
                  <Select
                    placeholder='Select option'
                    variant="outline"
                    fontSize="sm"
                    ms="4px"
                    size="lg"
                    name="role"
                    id="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                  >
                    <option value='doctor'>Dokter</option>
                    <option value='receptionist'>Resepsionis</option>
                  </Select>
                </FormControl>
                <FormControl mb="24px">
                  <FormLabel htmlFor='name'>Nama</FormLabel>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    variant="outline"
                    fontSize="sm"
                    ms="4px"
                    size="lg"
                    placeholder='Nama'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl mb="24px">
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    variant="outline"
                    fontSize="sm"
                    ms="4px"
                    size="lg"
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <FormHelperText>Pastikan email sudah benar.</FormHelperText>
                </FormControl>
                <FormControl mb="24px">
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    variant="outline"
                    fontSize="sm"
                    ms="4px"
                    size="lg"
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </FormControl>
                <FormControl mb="24px">
                  <FormLabel htmlFor='password2'>Konfirmasi Password</FormLabel>
                  <Input
                    id='password2'
                    name='password2'
                    type='password'
                    size='lg'
                    placeholder='Konfirmasi Password'
                    variant="outline"
                    fontSize="sm"
                    ms="4px"
                    value={formik.values.password2}
                    onChange={formik.handleChange}
                  />
                  <FormHelperText>Konfirmasi kembali password.</FormHelperText>
                </FormControl>
                <Button
                  w="fit-content"
                  bg='blue.300'
                  color='white'
                  type='submit'
                >Tambahkan Pengguna</Button>
              </form>
            </Stack>
          </Box>
        </Container>
      </SidebarWithHeader>
    </>
  )
}
