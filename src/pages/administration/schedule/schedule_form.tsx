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
  HStack
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
                <FormLabel fontSize={14}>Dokter</FormLabel>
                <Select placeholder='Select option' size='sm'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={14}>Hari</FormLabel>
                <Select placeholder='Select option' size='sm'>
                  <option value='option1'>Senin</option>
                  <option value='option2'>Selasa</option>
                  <option value='option3'>Rabu</option>
                  <option value='option3'>Kamis</option>
                  <option value='option3'>Jumat</option>
                  <option value='option3'>Sabtu</option>
                  <option value='option3'>Minggu</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={14}>Jam Praktek</FormLabel>
                <HStack>
                  <Input id='hargaobat' type='number' size='sm' placeholder='Jam Mulai'/>
                  <Input id='hargaobat' type='number' size='sm' placeholder='Jam Berakhir'/>
                </HStack>
                <FormHelperText fontSize={10}>Dalam Format 24 jam.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='email' fontSize={14}>Harga</FormLabel>
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
