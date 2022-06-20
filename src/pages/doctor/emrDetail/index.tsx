import {
  Container,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import SidebarWithHeader from 'components/Sidebar';

import emrHistoryData from 'utils/constants/emrHistoryData';
import EmrHistoryData from 'types/EmrHistoryData';

const EmrDetail = () => {
  const { id } = useParams();
  const latestHistoryData: EmrHistoryData = emrHistoryData.filter(
    (item) => item.id === Number(id)
  )[0];

  return (
    <>
      <SidebarWithHeader>
        <Container maxW='90vw'>
          <Text fontSize='xl' fontWeight='bold' mb='8px'>
            Detail EMR Pasien {latestHistoryData.name}
          </Text>
          <a href='/emr-history'>
            <Button mb='8px'>Kembali</Button>
          </a>
          <UnorderedList display='table' listStyleType='none' mt='1rem'>
            <ListItem display='table-row'>
              <Text display='table-cell' pr='4em' fontWeight='bold'>
                Name
              </Text>
              : {latestHistoryData.name}
            </ListItem>
            <ListItem display='table-row'>
              <Text display='table-cell' pr='4em' fontWeight='bold'>
                Examination Date
              </Text>
              : {latestHistoryData.examinationDate}
            </ListItem>
          </UnorderedList>
        </Container>
      </SidebarWithHeader>
    </>
  );
};

export default EmrDetail;
