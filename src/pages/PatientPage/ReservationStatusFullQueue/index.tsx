import { Text } from "@chakra-ui/react";

import ReservationStatusFullQueue from "components/molecules/ReservationStatus/QueueFull";

import SidebarWithHeader from "components/Sidebar";

const QueueFull = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Status Reservasi
      </Text>

      <ReservationStatusFullQueue></ReservationStatusFullQueue>
    </SidebarWithHeader>
  );
};

export default QueueFull;
