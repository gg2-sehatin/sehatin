import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

function StatusReservationNotOpen() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  return (
    <Flex position="relative" bg="gray.100">
      <Flex
        h="100vh"
        p="24px"
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
      >
        <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
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
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}
          >
            <Text
              fontSize="xl"
              color={textColor}
              fontWeight="regular"
              textAlign="center"
              mb="22px"
            >
              Maaf, waktu pendaftaran belum buka
            </Text>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            ></Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default StatusReservationNotOpen;
