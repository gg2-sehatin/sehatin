import {
  Flex,
  Button,
  FormControl,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function ReservationStatusNotRegister() {
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
      boxShadow={useColorModeValue(
        "0px 5px 14px rgba(0, 0, 0, 0.05)",
        "outline"
      )}
    >
      <Text
        fontSize="xl"
        color={textColor}
        fontWeight="regular"
        textAlign="center"
        mb="22px"
      >
        Belum memiliki nomor antrian, silahkan mendaftar!
      </Text>

      <FormControl>
        <a href="/form">
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

export default ReservationStatusNotRegister;
