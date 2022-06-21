import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Container,
  Box
} from '@chakra-ui/react';

import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function obat() {
  return (
    <>
      <Container maxW="container.lg" py={10}>
        <Box>
          <Button leftIcon={<AddIcon />} colorScheme='twitter' variant='solid' size='sm'>Add</Button>
        </Box>
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
                  <Button
                    leftIcon={<DeleteIcon />}
                    colorScheme='red'
                    variant='solid'
                    size='sm'>Delete</Button>
                  <Button leftIcon={<EditIcon />}
                    colorScheme='green' variant='solid'
                    size='sm'>Update</Button>
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
      </Container>
    </>
  )
}
