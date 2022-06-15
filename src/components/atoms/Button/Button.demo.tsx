import { HStack } from "@chakra-ui/react";
import Button from '.';

const ButtonDemo = () => {
  return (
    <HStack>
      <Button>Base Button</Button>
      <Button variant="text">Text Button</Button>
    </HStack>
  );
};

export default ButtonDemo;
