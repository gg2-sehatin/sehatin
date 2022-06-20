import React from "react";
import {
  Flex,
  Button,
  FormControl,
  Text,
  useColorModeValue,
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

function StatusReservationFormRegister() {
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

            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Jam
            </FormLabel>
            <Input
              variant="outline"
              fontSize="sm"
              ms="4px"
              type="time"
              mb="24px"
              size="lg"
            />

            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Nama
              </FormLabel>
              <Input
                variant="outline"
                fontSize="sm"
                ms="4px"
                type="text"
                placeholder="Nama lengkap"
                mb="24px"
                size="lg"
              />
            </FormControl>

            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Tanggal Lahir
            </FormLabel>
            <Input
              variant="outline"
              fontSize="sm"
              ms="4px"
              type="date"
              placeholder="Tempat lahir"
              mb="24px"
              size="lg"
            />

            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Usia
            </FormLabel>
            <Input
              variant="outline"
              fontSize="sm"
              ms="4px"
              type="number"
              placeholder="Masukkan usia dalam angka"
              mb="24px"
              size="lg"
            />

            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Jenis Kelamin
            </FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="1">Laki-laki</Radio>
                <Radio value="2">Perempuan</Radio>
              </Stack>
            </RadioGroup>

            <FormControl>
              <a href="/statusreservationonwaiting">
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

export default StatusReservationFormRegister;
