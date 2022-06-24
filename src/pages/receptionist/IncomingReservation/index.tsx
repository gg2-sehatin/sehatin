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

export default function IncomingReservation() {
  return (
    <SidebarWithHeader>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            px={3}
            color={"blue.500"}
            rounded={"full"}
          >
            Incoming Reservation
          </Text>
        </Stack>
        <Box bg={useColorModeValue("gray.50", "gray.900")} px={15} py={10}>
          <List spacing={3}>
            <ListItem>1. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"blue.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Approve
            </Button>
            <ListItem>2. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"blue.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Approve
            </Button>
            <ListItem>3. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"blue.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Approve
            </Button>
            <ListItem>4. Nama Pasien</ListItem>
            <Button
              mt={10}
              w={"full"}
              bg={"blue.400"}
              color={"white"}
              rounded={"xl"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Approve
            </Button>
            <ListItem></ListItem>
          </List>
        </Box>
      </Box>
    </SidebarWithHeader>
  );
}
