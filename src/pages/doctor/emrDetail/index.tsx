// import chakra
import { Container, Text, Button, Table, TableContainer, Thead, Tbody } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

// Components
import SidebarWithHeader from 'components/Sidebar';
import Rows from 'components/TableData/rows';
import Headers from 'components/TableData/headers';

import emrHistoryData from 'utils/constants/emrHistoryData';

const EmrDetail = () => {
  const { id } = useParams();
  const data = emrHistoryData.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <SidebarWithHeader>
        <Container maxW='90vw'>
          <Text fontSize='xl' fontWeight='bold' mb='8px'>
            Detail EMR Pasien {data['nama']}
          </Text>
          <a href='/emr-history'>
            <Button mb='8px'>Kembali</Button>
          </a>
        </Container>
        <TableContainer overflowX='auto'>
          <Table variant='simple'>
            <Thead>
              <Headers
                headers={['No', 'Data', 'Keterangan']}
              />
            </Thead>
            <Tbody>
              <Rows data={data} type='emr' />
            </Tbody>
          </Table>
        </TableContainer>
      </SidebarWithHeader>
    </>
  );
};

export default EmrDetail;
