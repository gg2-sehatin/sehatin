// Chakra
import {
	Box,
	Flex,
	useColorModeValue,
	Text,
	BoxProps,
	CloseButton,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

// Icons
import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
} from 'react-icons/fi';

// Components
import NavItem from 'components/NavItem';

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

interface LinkItemProps {
	name: string;
	icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
	{ name: 'Home', icon: FiHome },
	{ name: 'Trending', icon: FiTrendingUp },
	{ name: 'Explore', icon: FiCompass },
	{ name: 'Favourites', icon: FiStar },
	{ name: 'Settings', icon: FiSettings },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			transition='3s ease'
			bg={useColorModeValue('white', 'gray.900')}
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}>
			<Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					SehatIn
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} icon={link.icon}>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

export default SidebarContent;
