import { Thead, TableContainer, Table, Text, Tbody } from '@chakra-ui/react';

import SidebarWithHeader from 'components/Sidebar';
import Headers from 'components/TableData/Headers';
import Rows from 'components/TableData/Rows';
// import { useEffect, useState } from 'react';

import emrHistoryData from 'utils/constants/emrHistoryData';
const EmrHistory = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/emr', {
  //     method: 'GET'
  //   })
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [])

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
