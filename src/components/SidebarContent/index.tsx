import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
} from '@chakra-ui/react';
import NavItem from 'components/NavItem';
import {
  FiHome
} from 'react-icons/fi';
import useAuth from 'hooks/useAuth';

import { SidebarContentProps } from './types';
import { LinkItemProps } from './types';

const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
  let Links: Array<LinkItemProps> = [];
  const { auth } = useAuth();

  if(auth?.role === "doctor"){
    Links = [
      { name: 'Beranda', icon: FiHome, link: '/' },
      { name: 'Daftar EMR', icon: FiHome, link: '/emr-history' },
      { name: 'Tambah EMR', icon: FiHome, link: '/add-emr' },
    ]
  }

  if(auth?.role === "patient") {
    Links = [
      { name: 'Beranda', icon: FiHome, link: '/' },
      { name: 'Form Reservasi', icon: FiHome, link: '/form-reservasi' },
      { name: 'Riwayat EMR', icon: FiHome, link: '/my-emr' },
    ]
  }

  if(auth?.role === "admin") {
    Links = [
      { name: 'Beranda', icon: FiHome, link: '/' },
      { name: 'Obat', icon: FiHome, link: '/medicine' },
      { name: 'Jadwal', icon: FiHome, link: '/schedule' },
      { name: 'Pengguna Aplikasi', icon: FiHome, link: '/user' }
    ]
  }

  if(auth?.role === "receptionist") {
    Links = [
      { name: 'Beranda', icon: FiHome, link: '/' },
      { name: 'Antrian Pasien', icon: FiHome, link: '/queue-patient' },
      { name: 'Antrian Obat', icon: FiHome, link: '/queue-medicine' },
      { name: 'Pembayaran', icon: FiHome, link: '/billing-payment' }
    ]
  }


  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          SehatIn
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {Links.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
