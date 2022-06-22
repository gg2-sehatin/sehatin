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

export default function index() {
  return (
    <>
      <SidebarWithHeader>
        <Heading size='lg' mb='3'>
          Schedule
        </Heading>
        <Flex justifyContent='right'>
          <Link
            as={RouteLink}
            to="/scheduleform"
          >
            <Button
              leftIcon={<AddIcon/>}
              colorScheme="twitter"
              mb={4}
            >Add New Data</Button>
          </Link>
        </Flex>
        <Box
          bg='gray.100'
          // w='50%'
          p={5}
          rounded="md"
        >
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th>Nama Dokter</Th>
                  <Th>Hari</Th>
                  <Th>Jam</Th>
                  <Th>Harga</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Dr. Budiman</Td>
                  <Td>Selasa</Td>
                  <Td>08:00 - 10:00</Td>
                  <Td>Rp. 80.000</Td>
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
                  <Th>Nama Dokter</Th>
                  <Th>Hari</Th>
                  <Th>Jam</Th>
                  <Th>Harga</Th>
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
