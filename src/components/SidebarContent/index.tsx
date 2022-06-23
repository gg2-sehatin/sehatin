import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
} from '@chakra-ui/react';
import NavItem from 'components/NavItem';
import {
  FiHome,
  // FiTrendingUp,
  // FiCompass,
  // FiStar,
  // FiSettings,
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
      { name: 'Daftar EMR', icon: FiHome, link: '/' },
      { name: 'Tambah EMR', icon: FiHome, link: '/add-emr' },
    ]
  }


  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          SehatIn
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
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
