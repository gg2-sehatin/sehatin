import { Table, TableContainer, Tbody, Text, Thead } from '@chakra-ui/react';

import SidebarWithHeader from 'components/Sidebar';
import Headers from 'components/TableData/headers';
import Rows from 'components/TableData/rows';

import queueMedicineData from 'utils/constants/queueMedicineData';
import { QUEUE_TYPE_MEDICINE } from 'pages/receptionist/queueMedicine/types/queue';
import QueueMedicineData from 'types/QueueMedicineData';

const QueueMedicine = () => {
  const queueDone: Array<QueueMedicineData> = queueMedicineData.filter(
    (item) => item.status.toLowerCase() === 'selesai'
  );

  const queueWaiting: Array<QueueMedicineData> = queueMedicineData.filter(
    (item) => item.status.toLowerCase() === 'dalam antrian'
  );

  return (
    <>
      <SidebarWithHeader>
        <Text fontSize='xl' fontWeight='bold' mb='8px'>
          Daftar Antrian Obat
        </Text>
        <TableContainer overflowX='auto' mb='2rem'>
          <Table variant='simple'>
            <Thead>
              <Headers headers={['No', 'Nama', 'Obat', 'Status', 'Aksi']} />
            </Thead>
            <Tbody>
              <Rows data={queueWaiting} type={QUEUE_TYPE_MEDICINE} />
            </Tbody>
          </Table>
        </TableContainer>
        <Text fontSize='xl' fontWeight='bold' mb='8px'>
          Daftar Antrean Obat yang Sudah Selesai
        </Text>
        <TableContainer overflowX='auto' mb='2rem'>
          <Table variant='simple'>
            <Thead>
              <Headers headers={['No', 'Nama', 'Obat', 'Status', 'Aksi']} />
            </Thead>
            <Tbody>
              <Rows data={queueDone} type={QUEUE_TYPE_MEDICINE} />
            </Tbody>
          </Table>
        </TableContainer>
      </SidebarWithHeader>
    </>
  );
};

export default QueueMedicine;
