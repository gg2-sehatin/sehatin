import {
  Box,
  Text,
  Stack,
  Table,
  TableContainer,
  Thead,
  Tbody,
  useColorModeValue,
  Tr,
  Td,
  Button
} from "@chakra-ui/react";
import Headers from "components/TableData/headers";
import PatientScheduleData from "types/PatientScheduleData";
import SidebarWithHeader from "components/Sidebar";
import { useEffect, useState } from "react";

export default function IncomingReservation() {
  const [data, setData] = useState<PatientScheduleData[]>([]);

  useEffect(()=> {
    fetch("http://localhost:3001/patients?status=Diperiksa")
      .then(res => res.json())
      .then(data => {
        data
          .sort((a: PatientScheduleData, b: PatientScheduleData) => a.jam.localeCompare(b.jam))
          .sort((a: PatientScheduleData, b: PatientScheduleData) => a.tanggal.localeCompare(b.tanggal));
        setData(data)
      })
  }, [])

  const handleApprove = (data: PatientScheduleData) => {
    return fetch(`http://localhost:3001/patients/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Dalam antrian",
      }),
    })
      .then(() => alert("Berhasil menyetujui"))
      .then(() => window.location.reload())
  }

  return (
    <SidebarWithHeader>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={2}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize='2xl'
            fontWeight={500}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            px={8}
            color={"blue.500"}
            rounded={"full"}
          >
            Incoming Reservation
          </Text>
        </Stack>
      </Box>
      <TableContainer overflowX="auto" mb="2rem">
        <Table variant="simple">
          <Thead>
            <Headers headers={["No", "Nama", "Tanggal", "Jam", "Aksi"]} />
          </Thead>
          <Tbody>
            {data.length > 0 ? data.filter((item) => item.status === 'Diperiksa').map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Text>{index+1}</Text>
                </Td>
                <Td>
                  <Text>{item.nama}</Text>
                </Td>
                <Td>
                  <Text>{new Date(item.tanggal).toLocaleDateString()}</Text>
                </Td>
                <Td>
                  <Text>{item.jam}</Text>
                </Td>
                <Td>
                  <Button
                    variant='dark'
                    color='white'
                    bg='blue.400'
                    mr='1'
                    onClick={() => handleApprove(item)}
                  >
                    Approve
                  </Button>
                </Td>
              </Tr>
            )) : (
              <Tr>
                <Td colSpan={5}>
                  <Text align='center' fontWeight='bold'>Tidak ada data</Text>
                </Td>
              </Tr>
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarWithHeader>
  );
}
