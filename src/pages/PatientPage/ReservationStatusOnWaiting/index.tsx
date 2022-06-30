import { Text } from "@chakra-ui/react";

import ReservationStatusOnWaiting from "components/molecules/ReservationStatus/Waiting";

import SidebarWithHeader from "components/Sidebar";

const Waiting = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Status Reservasi
      </Text>

      <ReservationStatusOnWaiting></ReservationStatusOnWaiting>
    </SidebarWithHeader>
  );
};

export default Waiting;
