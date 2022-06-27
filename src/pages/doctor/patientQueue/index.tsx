import {
  Text,
  TableContainer,
  Table,
  Thead,
  Tbody,
} from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";
import Headers from "components/TableData/headers";

export default function Pricing() {
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
            {/* <Rows data={queueWaiting} type={QUEUE_TYPE_MEDICINE} /> */}
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarWithHeader>
  );
}
