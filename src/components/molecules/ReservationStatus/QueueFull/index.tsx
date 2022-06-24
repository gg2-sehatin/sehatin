import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

function ReservationStatusFullQueue() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  return (
    <Flex
      zIndex="2"
      direction="column"
      w="445px"
      background="transparent"
      borderRadius="15px"
      p="40px"
      mx={{ base: "100px" }}
      m={{ base: "20px", md: "auto" }}
      bg={bgForm}
      boxShadow={useColorModeValue("0px 5px 14px rgba(0, 0, 0, 0.05)", "unset")}
    >
      <Text
        fontSize="xl"
        color={textColor}
        fontWeight="regular"
        textAlign="center"
        mb="22px"
      >
        Maaf, antrian penuh
      </Text>
    </Flex>
  );
}

export default ReservationStatusFullQueue;
