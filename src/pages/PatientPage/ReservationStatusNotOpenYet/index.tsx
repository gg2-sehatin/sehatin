import { Text } from "@chakra-ui/react";

import ReservationStatusNotOpen from "components/molecules/ReservationStatus/NotOpenYet";

import SidebarWithHeader from "components/Sidebar";

const NotOpenYet = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Status Reservasi
      </Text>

      <ReservationStatusNotOpen></ReservationStatusNotOpen>
    </SidebarWithHeader>
  );
};

export default NotOpenYet;
