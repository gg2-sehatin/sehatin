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
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import { useLocation, useNavigate } from "react-router-dom";

export default function MedicineForm() {
  // State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // Navigate
  const navigate = useNavigate();

  // Params
  const {state}: any = useLocation();

  // Formik
  const formik = useFormik({
    initialValues: {
      id: state?.id || '',
      medicine_name: state?.medicine_name || "",
      medicine_price: state?.medicine_price || "",
    },
    onSubmit: (values, actions) => {
      if (state?.isEdit) {
        fetch(`http://localhost:3001/medicine/${state?.id}`, {
          method: 'PATCH',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify((values))
        }).then(()=> {
          actions.resetForm({
            values: {
              id: '',
              medicine_name: '',
              medicine_price: '',
            },
          // you can also set the other form states here
          });
          setShow(true);
          setTimeout(() => {
            navigate('/medicine');
          }, 2000)
        });
        return;
      }

      fetch('http://localhost:3001/medicine', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify((values))
      }).then(()=> {
        actions.resetForm({
          values: {
            id: '',
            // the type of `values` inferred to be Blog
            medicine_name: '',
            medicine_price: '',
          },
          // you can also set the other form states here
        });
        setShow(true);
        setTimeout(() => {
          navigate('/medicine');
        }, 2000)
      });
    }
  });

  return (
    <>
      <SidebarWithHeader>
        <Container
          maxW='container.xl'
          py={4}
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
                  onClick={handleClose}
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
