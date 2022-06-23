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
} from '@chakra-ui/react'

export default function MedicineForm() {
  return (
    <>
      <SidebarWithHeader>
        <Container
          maxW='container.xl'
          py={4}
          bg='blue.100'
        >
          <Heading size='lg' mb='3'>
            Medicines
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
                <FormLabel htmlFor='email' fontSize={14}>Nama Obat</FormLabel>
                <Input id='namaobat' type='text' size='sm' />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Quantity</FormLabel>
                <Input id='qtyobat' type='text' size='sm' />
                <FormHelperText fontSize={10}>Pastikan jumlah barang sesuai.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Harga Obat</FormLabel>
                <Input id='hargaobat' type='number' size='sm' />
                <FormHelperText fontSize={10}>Pastikan harga sudah benar.</FormHelperText>
              </FormControl>
              <Button size='sm'>Save</Button>
            </Stack>
          </Box>
        </Container>
      </SidebarWithHeader>
    </>
  )
}
