import { Text } from "@chakra-ui/react";

import ReservationStatusNotRegister from "components/molecules/ReservationStatus/NotRegistered";

import SidebarWithHeader from "components/Sidebar";

const NotRegistered = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Status Reservasi
      </Text>

      <ReservationStatusNotRegister></ReservationStatusNotRegister>
    </SidebarWithHeader>
  );
};

export default NotRegistered;
