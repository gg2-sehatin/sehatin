import { Text, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import SidebarWithHeader from "components/Sidebar";

export default function EmrPatient() {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Rekam Medis Pribadi
      </Text>
      <Button
        mt={5}
        mr={5}
        w={"half"}
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
        Rekam Medis
      </Button>
      <Button
        mt={5}
        w={"half"}
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
        Riwayat pembayaran
      </Button>
      <UnorderedList display="table" listStyleType="none" mt="1rem">
        <ListItem display="table-row">
          <Text display="table-cell" pr="4em" fontWeight="bold">
            Name
          </Text>
        </ListItem>
        <ListItem display="table-row">
          <Text display="table-cell" pr="4em" fontWeight="bold">
            Examination Date
          </Text>
        </ListItem>
      </UnorderedList>
    </SidebarWithHeader>
  );
}
