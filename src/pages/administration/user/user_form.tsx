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

export default function schedule_form() {
  return (
    <>
      <SidebarWithHeader>
        <Container
          maxW='container.xl'
          py={4}
          bg='blue.100'
        >
          <Heading size='lg' mb='3'>
            Schedule
          </Heading>
          <Box
            p={5}
            bg="white"
            rounded="md"
          >
            <Heading size='md' mb={3}>
              Create New Data
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
              <Button size='sm'>Save</Button>
            </Stack>
          </Box>
        </Container>
      </SidebarWithHeader>
    </>
  )
}
