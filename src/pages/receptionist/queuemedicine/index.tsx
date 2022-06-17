/* eslint-disable no-mixed-spaces-and-tabs */
// import chakra
import { Table, TableContainer, Tbody, Text, Thead } from '@chakra-ui/react';

// Component
import SidebarWithHeader from 'components/Sidebar';
import Headers from 'components/TableData/headers';
import Rows from 'components/TableData/rows';

// Fake data
import queueMedicineData from 'utils/constants/queueMedicineData';

const QueueMedicine = () => {
  const queueDone = queueMedicineData.filter(
    (item) => (item.status).toLowerCase() === 'selesai'
  ) as React.ReactNode;

  const queueWaiting = queueMedicineData.filter(
    (item) => (item.status).toLowerCase() === 'dalam antrian'
  ) as React.ReactNode;

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
              <Rows data={queueWaiting} type='medicine' />
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
              <Rows data={queueDone} type='medicine' />
            </Tbody>
          </Table>
        </TableContainer>
      </SidebarWithHeader>
    </>
  );
};

export default QueueMedicine;
