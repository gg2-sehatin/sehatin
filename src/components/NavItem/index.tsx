import { Flex, Icon, Link } from '@chakra-ui/react';
import NavItemProps from './types';

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href='#'
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'blue.300',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
