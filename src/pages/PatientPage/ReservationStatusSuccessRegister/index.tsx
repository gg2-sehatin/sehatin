import { Text } from "@chakra-ui/react";

import SuccessRegister from "components/molecules/ReservationStatus/RegistrationSuccess/Index";

import SidebarWithHeader from "components/Sidebar";

const RegistrationSuccess = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Status Reservasi
      </Text>

      <SuccessRegister></SuccessRegister>
    </SidebarWithHeader>
  );
};

export default RegistrationSuccess;
