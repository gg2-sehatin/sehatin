import { Text, Button, Image } from "@chakra-ui/react";
import SidebarWithHeader from "components/Sidebar";
import image from "assets/riwayat-pembayaran.png";

export default function BillPayment() {
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
      <Image mt={10} src={image} alt="Riwayat pembayaran" />
    </SidebarWithHeader>
  );
}
