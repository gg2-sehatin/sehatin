/* eslint-disable no-mixed-spaces-and-tabs */
// import chakra
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  TableCaption,
  TableContainer,
  Container,
} from '@chakra-ui/react';

// Component
import DataRiwayatEmr from 'components/DataRiwayatEmr';
import SidebarWithHeader from 'components/Sidebar';

// Fake data
import emrHistoryData from 'utils/constants/emrHistoryData';
const EmrHistory = () => {
  return (
    <>
      <SidebarWithHeader>
        <Container maxW='90vw'>
          <Text fontSize='xl' fontWeight='bold' mb='8px'>
            Daftar Riwayat EMR Pasien
          </Text>
          <TableContainer overflowX='auto'>
            <Table variant='simple'>
              <TableCaption>Riwayat EMR Pasien</TableCaption>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama</Th>
                  <Th>Tanggal Pemeriksaan</Th>
                  <Th>Aksi</Th>
                </Tr>
              </Thead>
              <Tbody>
                <DataRiwayatEmr data={emrHistoryData} />
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </SidebarWithHeader>
    </>
  );
};

export default EmrHistory;
