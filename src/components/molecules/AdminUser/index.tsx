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
import { useState, useEffect } from 'react';
import User from 'types/User';

export default function AdminUser() {
  const [users, setUsers] = useState<User[]>([])

  const handleDelete = (id: number, type: string) => {
    if(confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      return fetch(`http://localhost:3001/${type}/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          alert('Berhasil menghapus pengguna!')
          window.location.reload()
        })
    } else {
      return;
    }
  }

  useEffect(() => {
    fetch('http://localhost:3001/users', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <SidebarWithHeader>
        <Heading size='lg' mb='3'>
          Daftar Pengguna
        </Heading>
        <Flex justifyContent='left'>
          <Link
            as={RouteLink}
            to="/user/create"
          >
            <Button
              leftIcon={<AddIcon/>}
              bg='blue.400'
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
                  <Th>Role</Th>
                  <Th>Nama</Th>
                  <Th>Email</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map(user => (
                    <Tr key={user.id}>
                      <Td>
                        <Badge colorScheme='green'>{user.role}</Badge>
                      </Td>
                      <Td>{user.name}</Td>
                      <Td>{user.email}</Td>
                      <Td>
                        <ButtonGroup spacing={2}>
                          <Tooltip label='Delete Data'>
                            <Button
                              colorScheme='red'
                              size='sm'
                              onClick={() => handleDelete(user.id, 'users')}
                            >
                              <Icon as={DeleteIcon}/>
                            </Button>
                          </Tooltip>
                          <Tooltip label='Update Data'>
                            <Button
                              colorScheme='green'
                              size='sm'
                              as={RouteLink}
                              to={`/user/edit/${user.id}`}
                            >
                              <Icon as={EditIcon}/>
                            </Button>
                          </Tooltip>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  ))
                }
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
