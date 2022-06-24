import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
  Image,
  Box,
  Link,
} from "@chakra-ui/react";
import image from "assets/antrian.png";
import { Link as RouteLink } from "react-router-dom";

function SuccessRegister() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  return (
    <Flex
      zIndex="2"
      direction="column"
      w="700px"
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
        fontWeight="bold"
        textAlign="center"
        mb="22px"
      >
        Pendaftaran berhasil, Harap perhatikan nomor antrian anda!
      </Text>

      <Box boxSize="large">
        <Image src={image} alt="Nomor Antrian" />
      </Box>

      <Text color={textColor} fontWeight="medium">
        Klik
        <Link
          color={titleColor}
          as={RouteLink}
          ms="5px"
          to="/antrian"
          fontWeight="bold"
        >
          disini--
        </Link>
        untuk melihat status antrian!
      </Text>
    </Flex>
  );
}

export default SuccessRegister;
