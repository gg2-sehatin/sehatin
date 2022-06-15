import { Heading, Stack } from "@chakra-ui/react";
import ButtonDemo from "components/atoms/Button/Button.demo";

const ComponentDemoPage = () => {
  return (
    <>
      <Heading>Component Demo</Heading>
      <Stack spacing={8} direction='row'>
        Button Demo
        <ButtonDemo />
      </Stack>
    </>
  );
};

export default ComponentDemoPage;
