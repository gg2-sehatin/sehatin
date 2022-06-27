import { Box, chakra, SimpleGrid } from "@chakra-ui/react";
import {
  BsFileEarmarkMedical,
  BsPersonCircle,
  BsCashStack,
  BsClipboardCheck,
} from "react-icons/bs";
import StatsCard from "components/atoms/StatsCard";

export default function Queue() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        Status Antrian
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Antrian Anda"}
          stat={"24"}
          icon={<BsPersonCircle size={"3em"} />}
        />
        <StatsCard
          title={"Antrian Pemeriksaan"}
          stat={"#N/A"}
          icon={<BsClipboardCheck size={"3em"} />}
        />
        <StatsCard
          title={"Antrian Pengambilan Obat"}
          stat={"#N/A"}
          icon={<BsFileEarmarkMedical size={"3em"} />}
        />
        <StatsCard
          title={"Antrian pembayaran"}
          stat={"#N/A"}
          icon={<BsCashStack size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
