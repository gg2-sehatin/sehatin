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
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

function StatusReservationFormRegister() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const format = (value: string) => value + ` Tahun`;
  const parse = (value: string) => value.replace(/^\$/, "");

  const [value, setValue] = React.useState("0");
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
            <NumberInput
              ms="4px"
              mb="24px"
              size="lg"
              allowMouseWheel
              onChange={(valueString) => setValue(parse(valueString))}
              value={format(value)}
              defaultValue={1}
              min={1}
              max={200}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Jenis Kelamin
            </FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio value="1">Laki-laki</Radio>
                <Radio value="2">Perempuan</Radio>
              </Stack>
            </RadioGroup>

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
