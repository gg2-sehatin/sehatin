import React from "react";
// Chakra imports
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

function Register() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");
  return (
    <Flex position="relative" bg="gray.100">
      <Flex
        h="auto"
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
              Daftar
            </Text>

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
                Tempat
              </FormLabel>
              <Input
                variant="outline"
                fontSize="sm"
                ms="4px"
                type="text"
                placeholder="Tempat lahir"
                mb="24px"
                size="lg"
              />
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
                Nomor Telepon
              </FormLabel>
              <Input
                variant="outline"
                fontSize="sm"
                ms="4px"
                type="number"
                placeholder="Nomor telepon"
                mb="24px"
                size="lg"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                variant="outline"
                fontSize="sm"
                ms="4px"
                type="email"
                placeholder="Email"
                mb="24px"
                size="lg"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                variant="outline"
                fontSize="sm"
                ms="4px"
                type="password"
                placeholder="Password"
                mb="24px"
                size="lg"
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Konfirmasi password
              </FormLabel>
              <Input
                variant="outline"
                fontSize="sm"
                ms="4px"
                type="password"
                placeholder="Konfirmasi password"
                mb="24px"
                size="lg"
              />
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
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Sudah punya akun?
                <Link
                  color={titleColor}
                  as={RouteLink}
                  ms="5px"
                  to="/"
                  fontWeight="bold"
                >
                  Masuk
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Register;
