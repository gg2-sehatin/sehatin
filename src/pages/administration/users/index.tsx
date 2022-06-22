import React from 'react'
import SidebarWithHeader from 'components/Sidebar';
import {
  Box,
  Stack,
  Container,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  ButtonGroup,
  Tooltip,
  Icon,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
  Input,
  Alert,
  AlertIcon,
  // AlertTitle,
  // AlertDescription,
} from '@chakra-ui/react'
import {
  // AddIcon,
  DeleteIcon,
  EditIcon
} from "@chakra-ui/icons"

export default function index() {
  return (
    <>
      <SidebarWithHeader>
        <Container
          maxW='container.xl'
          py={4}
          bg='blue.100'
        >
          <Heading size='lg' mb='3'>
            Users
          </Heading>
          <Flex gap={4}>
            <Box
              w='50%'
              p={5}
              bg="white"
              rounded="md"
            >
              <Heading size='md' mb={3}>
                Create New Data
              </Heading>
              <Alert status='success'>
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
            <Box
              bg='white'
              w='50%'
              p={5}
              rounded="md"
            >
              <Heading size='md' mb={3}>
                Users Data
              </Heading>
              <TableContainer>
                <Table size='sm'>
                  <Thead>
                    <Tr>
                      <Th>Nama</Th>
                      <Th>Harga</Th>
                      <Th>QTY</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Paracetamol</Td>
                      <Td>3000</Td>
                      <Td>10</Td>
                      <Td>
                        <ButtonGroup spacing={2}>
                          <Tooltip label='Delete Data'>
                            <Button
                              colorScheme='red'
                              size='sm'
                            >
                              <Icon as={DeleteIcon}/>
                            </Button>
                          </Tooltip>
                          <Tooltip label='Update Data'>
                            <Button
                              colorScheme='green'
                              size='sm'
                            >
                              <Icon as={EditIcon}/>
                            </Button>
                          </Tooltip>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>Nama</Th>
                      <Th>Harga</Th>
                      <Th>QTY</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </Container>
      </SidebarWithHeader>
    </>
  )
}
