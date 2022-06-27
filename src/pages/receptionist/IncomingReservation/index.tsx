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
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={2}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize='2xl'
            fontWeight={500}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            px={8}
            color={"blue.500"}
            rounded={"full"}
          >
            Incoming Reservation
          </Text>
        </Stack>
        <Box px={15}>
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
