import {
  Box,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import  StatsCard  from 'components/atoms/StatsCard';
import SidebarWithHeader from 'components/Sidebar';
import { useEffect, useState } from 'react';

export default function Administration() {
  const [doctor, setDoctor] = useState([])
  const [patient, setPatient] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3001/users?role=doctor', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setDoctor(data))

    fetch('http://localhost:3001/users?role=patient', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setPatient(data))
  }, [])

  return (
    <SidebarWithHeader>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Text fontSize='xl' fontWeight='bold' mb='10px'>
          Dashboard
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Total Dokter'}
            stat={doctor.length.toString()}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Total Pasien'}
            stat={patient.length.toString()}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Obat'}
            stat={'20'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Bill'}
            stat={'Rp. 1.200.000'}
            icon={<BsPerson size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    </SidebarWithHeader>
  );
}