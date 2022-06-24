import {
  Box,
  Text,
  Stack,
  List,
  ListItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import SidebarWithHeader from "components/Sidebar";

export default function Pricing() {
  return (
    <SidebarWithHeader>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "grey.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("white.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("red.50", "grey.900")}
            p={2}
            px={3}
            color={"red.500"}
            rounded={"full"}
          >
            Antrian Pasien
          </Text>
        </Stack>
        <Box bg={useColorModeValue("gray.50", "red.900")} px={15} py={10}>
          <List spacing={3}>
            <ListItem>1. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"red.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "red.500",
              }}
              _focus={{
                bg: "red.500",
              }}
            >
              Batal
            </Button>
            <ListItem>2. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"red.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "red.500",
              }}
              _focus={{
                bg: "red.500",
              }}
            >
              Batal
            </Button>
            <ListItem>3. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"red.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "red.300",
              }}
              _focus={{
                bg: "red.500",
              }}
            >
              Batal
            </Button>
            <ListItem></ListItem>
          </List>
        </Box>
      </Box>
    </SidebarWithHeader>
  );
}
