import { useState } from "react";
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
  CloseButton,
  useDisclosure,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { useFormik } from 'formik';

export default function MedicineForm() {
  const [show, setShow] = useState(false);

  const { onClose } = useDisclosure()

  const formik = useFormik({
    initialValues: {
      medicine_name:"",
      medicine_price: "",
    },
    onSubmit: (values) => {
      fetch('http://localhost:3001/medicine', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify((values))
      }).then(()=> setShow(true))
    }
  });
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
            {show ? (
              <Alert status='success'>
                <AlertIcon />
                <Box flex='2'>
                  <AlertTitle>Berhasil!</AlertTitle>
                  <AlertDescription>
                    Data berhasil ditambahkan!
                  </AlertDescription>
                </Box>
                <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  top={-1}
                  onClick={onClose}
                />
              </Alert>
            ) : null}
            <Stack>
              <form onSubmit={ formik.handleSubmit }>
                <FormControl>
                  <FormLabel htmlFor='email' fontSize={14}>Nama Obat</FormLabel>
                  <Input
                    id='medicine_name'
                    name='medicine_name'
                    onChange={formik.handleChange}
                    value={ formik.values.medicine_name }
                    type='text'
                    size='sm' />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email' fontSize={14}>Harga Obat</FormLabel>
                  <Input
                    id='medicine_price'
                    name='medicine_price'
                    onChange={formik.handleChange}
                    value={ formik.values.medicine_price }
                    type='number'
                    size='sm' />
                  <FormHelperText fontSize={10}>Pastikan harga sudah benar.</FormHelperText>
                </FormControl>
                <Button size='sm'
                  type="submit">Save</Button>
              </form>
            </Stack>
          </Box>
        </Container>
      </SidebarWithHeader>
    </>
  )
}
