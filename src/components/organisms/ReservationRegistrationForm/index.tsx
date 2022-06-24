import React from "react";
import {
  Flex,
  Button,
  FormControl,
  Text,
  useColorModeValue,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

function ReservationStatusFormRegister() {
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
        fontWeight="bold"
        textAlign="center"
        mb="22px"
      >
        Formulir Reservasi
      </Text>

      <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
        Tanggal
      </FormLabel>
      <Input
        variant="outline"
        fontSize="sm"
        ms="4px"
        type="date"
        mb="24px"
        size="lg"
      />

      <FormLabel ms="4px" fontSize="sm" mt="24px" fontWeight="normal">
        Dokter Pilihan
      </FormLabel>
      <Select placeholder="Pilih dokter" ms="4px" mb="24px" size="lg">
        <option value="option1">Dr. A</option>
        <option value="option2">Dr. B</option>
        <option value="option3">Dr. C</option>
      </Select>

      <FormControl>
        <a href="/statusonwaiting">
          <Button
            mt="24px"
            fontSize="10px"
            variant="dark"
            fontWeight="bold"
            w="100%"
            h="45"
            mb="24px"
            color="white"
            bg="blue.200"
          >
            DAFTAR
          </Button>
        </a>
      </FormControl>
    </Flex>
  );
}

export default ReservationStatusFormRegister;
