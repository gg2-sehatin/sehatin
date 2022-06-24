import { Text } from "@chakra-ui/react";

import ReservationStatusFormRegister from "components/organisms/ReservationRegistrationForm";

import SidebarWithHeader from "components/Sidebar";

const FormRegister = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Status Reservasi
      </Text>

      <ReservationStatusFormRegister></ReservationStatusFormRegister>
    </SidebarWithHeader>
  );
};

export default FormRegister;
