import { React, useState } from "react";
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
import { EmailIcon, LockIcon, AtSignIcon } from "@chakra-ui/icons";

const UserSignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  // state variables for password and confirm password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // state variable for password match status
  const [isMatch, setIsMatch] = useState(true);

  // function to handle password input change
  const handlePasswordChange = (e) => {
    // update password state
    setPassword(e.target.value);
    // check if confirm password matches
    setIsMatch(e.target.value === confirmPassword);
  };

  // function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    // update confirm password state
    setConfirmPassword(e.target.value);
    // check if password matches
    setIsMatch(e.target.value === password);
  };
  //Function to handle sign up tasks
  const onSignUp = () => {
    toast({
      title: "Signed Up",
      description:
        "You have been successfully signed Up.Swich to Login in button to procced.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
    setTimeout(() => {
      window.location.href = "/user";
    }, 4000);
  };
  return (
    <Box boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" p="5">
      <form>
        <Stack spacing={4} align="center">
          <InputGroup>
            <InputLeftAddon children={<AtSignIcon />} />
            <Input placeholder="Enter your Full Name" name="name" />
          </InputGroup>

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
              value={password}
              onChange={handlePasswordChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup size="md">
            <InputLeftAddon children={<LockIcon />} />
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="ReType The Password"
              name="password_re"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="teal" size="md" w="35%" onClick={onSignUp}>
            SIGN UP
          </Button>
        </Stack>
        {!isMatch && <p style={{ color: "red" }}>Passwords do not match</p>}
      </form>
    </Box>
  );
};

export default UserSignUp;
