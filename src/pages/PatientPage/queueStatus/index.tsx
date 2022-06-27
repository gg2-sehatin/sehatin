import { Text } from "@chakra-ui/react";

import Queue from "components/queue";

import SidebarWithHeader from "components/Sidebar";

const queueStatus = () => {
  return (
    <SidebarWithHeader>
      <Text fontSize="xl" fontWeight="bold" mb="8px">
        Antrian
      </Text>

      <Queue></Queue>
    </SidebarWithHeader>
  );
};

export default queueStatus;
