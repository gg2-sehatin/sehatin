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

export default function AdminUserForm() {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(-1)} mb='4'>
        Kembali
      </Button>
      <SidebarWithHeader>
        <Container
          maxW='container.xl'
          py={4}
        >
          <Box
            bg="white"
            rounded="md"
          >
            <Heading size='md' mb={3}>
              Tambah Pengguna Baru
            </Heading>
            <Alert status='success' mb={3}>
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Stack>
              <FormControl>
                <FormLabel fontSize={14}>Role</FormLabel>
                <Select placeholder='Select option' size='sm'>
                  <option value='option1'>Dokter</option>
                  <option value='option2'>Resepsionis</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Nama</FormLabel>
                <Input id='hargaobat' type='text' size='sm' placeholder='Nama'/>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Email</FormLabel>
                <Input id='hargaobat' type='email' size='sm' placeholder='Email'/>
                <FormHelperText fontSize={10}>Pastikan email sudah benar.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Password</FormLabel>
                <Input id='hargaobat' type='password' size='sm' placeholder='Password'/>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Konfirmasi Password</FormLabel>
                <Input id='hargaobat' type='password' size='sm' placeholder='Konfirmasi Password'/>
                <FormHelperText fontSize={10}>Konfirmasi kembali password.</FormHelperText>
              </FormControl>
              <Button w="fit-content" bg='blue.300' color='white'>Save</Button>
            </Stack>
          </Box>
        </Container>
      </SidebarWithHeader>
    </>
  )
}
