import {
  Text,
  TableContainer,
  Table,
  Thead,
  Tbody,
} from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";
<<<<<<< HEAD
import Headers from "components/TableData/Headers";
=======
import Headers from "components/TableData/headers";
>>>>>>> 045491995c3c6a2f10d4af945e291f90ca816eb7
import Rows from "components/TableData/rows";
import { useEffect, useState } from "react";
import PatientScheduleData from "types/PatientScheduleData";

export default function PatientQueue() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3001/patients?status=Dalam antrian")
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
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Daftar Antrian Pasien
      </Text>
      <TableContainer overflowX="auto" mb="2rem">
        <Table variant="simple">
          <Thead>
            <Headers headers={["No", "Nama", "Tanggal", "Jam"]} />
          </Thead>
          <Tbody>
            <Rows data={data} type='schedule' />
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarWithHeader>
  );
}
