import {
  Box,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const UserLogin = () => {
  //Funcion to set the show button of password tab
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  //Function to handle login tasks
  const onLogin = () => {
    toast({
      title: "Logged In",
      description: "You have been successfully logged in.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    });

    setTimeout(() => {
      window.location.href = "/userdash";
    }, 2000);
  };
  return (
    <Box boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" p="5">
      <form method="post" action="/userlogin">
        <Stack spacing={4} align="center">
          <InputGroup>
            <InputLeftAddon children={<EmailIcon />} />
            <Input type="email" placeholder="Enter your Email" name="email" />
          </InputGroup>

          <InputGroup size="md">
            <InputLeftAddon children={<LockIcon />} />
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button colorScheme="teal" size="md" w="35%" onClick={onLogin}>
            LOGIN
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default UserLogin;
