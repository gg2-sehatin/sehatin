import {
  Box,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import  StatsCard  from 'components/atoms/StatsCard';
import SidebarWithHeader from 'components/Sidebar';

export default function Administration() {
  return (
    <SidebarWithHeader>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Text fontSize='xl' fontWeight='bold' mb='10px'>
          Dashboard
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Dokter'}
            stat={'5.000'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Pasien'}
            stat={'1.000'}
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