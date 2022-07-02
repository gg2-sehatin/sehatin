import React, { useState, useEffect } from "react";
import SidebarWithHeader from "components/Sidebar";
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
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";

interface IMedicine {
  id: number;
  medicine_name: string;
  medicine_price: number;
}

export default function AdminMedicineLIst() {
  // State
  const [dataMedicine, setDataMedicine] = useState<Array<IMedicine>>([]);

  // Lifecycle
  useEffect(() => {
    getMedicineList();
  }, []);
  //

  // Function
  const getMedicineList = () => {
    fetch("http://localhost:3001/medicine", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data: Array<IMedicine>) => {
        setDataMedicine(data);
      });
  };

  const deleteMedicine = (idMedicine: number) => {
    fetch(`http://localhost:3001/medicine/${idMedicine}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      getMedicineList();
    });
  };

  // Render Function
  const ListMedicine = ({ data }: { data: Array<IMedicine> }) => {
    return (
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Nama</Th>
              <Th>Harga</Th>
              <Th>QTY</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => (
              <Tr key={row.id.toString()}>
                <Td>{row.medicine_name}</Td>
                <Td>{row.medicine_price}</Td>
                <Td>10</Td>
                <Td>
                  <ButtonGroup spacing={2}>
                    <Tooltip label="Delete Data">
                      <Button
                        colorScheme="red"
                        size="sm"
                        onClick={() => {
                          deleteMedicine(row.id);
                        }}
                      >
                        <Icon as={DeleteIcon} />
                      </Button>
                    </Tooltip>
                    <Tooltip label="Update Data">
                      <Link
                        as={RouteLink}
                        to="/medicine/form"
                        state={{
                          id: row.id,
                          medicine_name: row.medicine_name,
                          medicine_price: row.medicine_price,
                          isEdit: true,
                        }}
                      >
                        <Button colorScheme="green" size="sm">
                          <Icon as={EditIcon} />
                        </Button>
                      </Link>
                    </Tooltip>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
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
    );
  };

  return (
    <>
      <SidebarWithHeader>
        <Heading size="lg" mb="3">
          Medicines
        </Heading>
        <Flex justifyContent="right">
          <Button 
            leftIcon={<AddIcon />} 
            colorScheme="blue" mb={4}
            as={RouteLink} 
            to="/medicine/form"
          >
            Add New Data
          </Button>
        </Flex>
        <Box bg="white" p={5} rounded="md">
          <ListMedicine data={dataMedicine} />
        </Box>
      </SidebarWithHeader>
    </>
  );
}