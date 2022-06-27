import SidebarWithHeader from 'components/Sidebar';
import {
  Box,
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
  Link
} from '@chakra-ui/react'
import {
  AddIcon,
  DeleteIcon,
  EditIcon
} from "@chakra-ui/icons"
import { Link as RouteLink } from 'react-router-dom';

export default function AdminMedicineLIst() {
  return (
    <>
      <SidebarWithHeader>
        <Heading size='lg' mb='3'>
          Obat
        </Heading>
        <Flex justifyContent='left'>
          <Link
            as={RouteLink}
            to="/medicine/create"
          >
            <Button
              leftIcon={<AddIcon/>}
              bg='blue.300'
              color='white'
              mb={4}
            >
              Tambah Data Baru
            </Button>
          </Link>
        </Flex>
        <Box
          bg='gray.100'
          p={5}
          rounded="md"
        >
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
      </SidebarWithHeader>
    </>
  )
}
