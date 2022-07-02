import {
  Box,
  Text,
  Stack,
  Table,
  TableContainer,
  Thead,
  Tbody,
  useColorModeValue,
} from "@chakra-ui/react";
import Headers from "components/TableData/Headers";
import PatientScheduleData from "types/PatientScheduleData";
import SidebarWithHeader from "components/Sidebar";
import Rows from "components/TableData/rows";
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
            <Rows data={data} type='approval' />
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarWithHeader>
  );
}
