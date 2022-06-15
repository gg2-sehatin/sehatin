// import chakra
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

// Components
import TabelDetailEmr from 'components/TabelDetailEmr';
import SidebarWithHeader from 'components/Sidebar';

import emrHistoryData from 'utils/constants/emrHistoryData';

const EmrDetail = () => {
  const { id } = useParams();
  const data = emrHistoryData.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <SidebarWithHeader>
        <Container maxW='90vw'>
          <Text fontSize='xl' fontWeight='bold' mb='8px'>
            Detail EMR Pasien {data['Nama']}
          </Text>
          <a href='/emr-history'>
            <Button mb='8px'>Kembali</Button>
          </a>
          <TableContainer overflowX='auto'>
            <Table variant='simple'>
              <TableCaption>Detail EMR Pasien</TableCaption>
              <Thead>
                <Tr>
                  <Th w='50px'>No</Th>
                  <Th>Data</Th>
                  <Th>Keterangan</Th>
                </Tr>
              </Thead>
              <Tbody>
                <TabelDetailEmr data={data} />
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </SidebarWithHeader>
    </>
  );
};

export default EmrDetail;
