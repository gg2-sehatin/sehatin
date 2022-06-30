import {
  Container,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import SidebarWithHeader from 'components/Sidebar';
import EmrHistoryData from 'types/EmrHistoryData';
import { useEffect, useState } from 'react';

const MyEmrDetail = () => {

  const { id } = useParams();
  const [data, setData] = useState<EmrHistoryData>({
    id: 0,
    pasien: '',
    examinationDate: '',
    diagnosa: '',
    obat: ''
  });

  useEffect(() => {
    fetch(`http://localhost:3001/emr/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <SidebarWithHeader>
        <Container maxW='90vw'>
          <Text fontSize='xl' fontWeight='bold' mb='8px'>
            Detail EMR Pasien {data.pasien}
          </Text>
          <Link to='/my-emr'>
            <Button mb='8px'>Kembali</Button>
          </Link>
          <UnorderedList display='table' listStyleType='none' mt='1rem'>
            <ListItem display='table-row'>
              <Text display='table-cell' pr='4em' fontWeight='bold'>
                Nama Pasien
              </Text>
              : {data.pasien}
            </ListItem>
            <ListItem display='table-row'>
              <Text display='table-cell' pr='4em' fontWeight='bold'>
                Tanggal Pemeriksaan
              </Text>
              : {data.examinationDate}
            </ListItem>
            <ListItem display='table-row'>
              <Text display='table-cell' pr='4em' fontWeight='bold'>
                Diagnosis
              </Text>
              : {data.diagnosa}
            </ListItem>
            <ListItem display='table-row'>
              <Text display='table-cell' pr='4em' fontWeight='bold'>
                Obat
              </Text>
              : {data.obat}
            </ListItem>
          </UnorderedList>
        </Container>
      </SidebarWithHeader>
    </>
  );
};

export default MyEmrDetail;
