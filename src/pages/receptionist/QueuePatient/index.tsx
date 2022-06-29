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

export default function PatientQueue() {
  return (
    <SidebarWithHeader>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "grey.800")}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={2}
          color={useColorModeValue("white.800", "white")}
          align={"center"}
        >
          <Text
            fontSize="2xl"
            fontWeight={500}
            bg={useColorModeValue("red.50", "grey.900")}
            p={2}
            px={8}
            color={"red.500"}
            rounded={"full"}
          >
            Antrian Pasien
          </Text>
        </Stack>
        <Box px={15}>
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
