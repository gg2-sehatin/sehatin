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
  Link,
  Badge
} from '@chakra-ui/react'
import {
  AddIcon,
  DeleteIcon,
  EditIcon
} from "@chakra-ui/icons"
import { Link as RouteLink } from 'react-router-dom';

export default function AdminUser() {
  return (
    <>
      <SidebarWithHeader>
        <Heading size='lg' mb='3'>
          User
        </Heading>
        <Flex justifyContent='right'>
          <Link
            as={RouteLink}
            to="/user-form"
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
          p={5}
          rounded="md"
        >
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th>Role</Th>
                  <Th>Nama</Th>
                  <Th>Email</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Badge colorScheme='green'>Dokter</Badge>
                  </Td>
                  <Td>Dr. Budiman</Td>
                  <Td>budiman.berbudi@email.com</Td>
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
                <Tr>
                  <Td>
                    <Badge colorScheme='purple'>Resepsionis</Badge>
                  </Td>
                  <Td>Resepsionis</Td>
                  <Td>resep.onis@email.com</Td>
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
                  <Th>Role</Th>
                  <Th>Nama</Th>
                  <Th>Email</Th>
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
