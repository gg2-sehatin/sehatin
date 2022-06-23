import {
  Box,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import  StatsCard  from 'components/atoms/StatsCard';

export default function Administration() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Admin Dashboard
      </chakra.h1>
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
  );
}