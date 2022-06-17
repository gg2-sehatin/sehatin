/* eslint-disable no-mixed-spaces-and-tabs */
// import chakra
import { Thead, TableContainer, Table, Text, Tbody } from '@chakra-ui/react';

// Component
import SidebarWithHeader from 'components/Sidebar';
import Headers from 'components/TableData/headers';
import Rows from 'components/TableData/rows';

// Fake data
import emrHistoryData from 'utils/constants/emrHistoryData';
const EmrHistory = () => {
  return (
    <>
      <SidebarWithHeader>
        <Text fontSize='xl' fontWeight='bold' mb='8px'>
          Daftar Riwayat EMR Pasien
        </Text>
        <TableContainer overflowX='auto'>
          <Table variant='simple'>
            <Thead>
              <Headers
                headers={['No', 'Nama', 'Tanggal Pemeriksaan', 'Aksi']}
              />
            </Thead>
            <Tbody>
              <Rows data={emrHistoryData} type='emr' />
            </Tbody>
          </Table>
        </TableContainer>
      </SidebarWithHeader>
    </>
  );
};

export default EmrHistory;
