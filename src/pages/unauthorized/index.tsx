import { Flex, Heading, Text, Button } from "@chakra-ui/react";

const Unauthorized = () => {

  return(
    <>
      <Flex
        h="100vh"
        w="100vw"
        bg="blue.300"
        px="32px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" textAlign="center" color="white" h="25%">
          <Heading>Ups, kamu dimana nih?</Heading>
          <Text fontSize="xl" my="5">
            Kamu tidak memiliki akses untuk mengunjungi halaman ini!
          </Text>
          <a href="/login">
            <Button color="blue.300">Kembali</Button>
          </a>
        </Flex>
      </Flex>
    </>
  )};

export default Unauthorized;
