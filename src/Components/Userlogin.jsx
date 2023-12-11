import {
  Flex,
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { EmailIcon, LockIcon, AtSignIcon } from "@chakra-ui/icons";
import { Form } from "react-router-dom";

const User = () => {
  //Funcion to set the show button of password tab
  const [show, setShow] = React.useState(false);
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
    <div>
      <Flex
        direction={{ base: "column", md: "row" }}
        m={50}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        borderRadius={20}
      >
        <Box flex={{ base: "1", md: "0.5" }} maxW="60%" p={5} m={2}>
          <Image src={process.env.PUBLIC_URL + "/dashboard.jpeg"} />
        </Box>

        <Box flex={{ base: "1", md: "0.5" }} maxW="40%" p={5} mt={150}>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>SIGN UP</Tab>
              <Tab>LOGIN</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* User SIGN UP form begins  */}
                <Form action="/usersignup" method="POST">
                  <Box boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" p="5">
                    <Stack spacing={4} align="center">
                      <InputGroup>
                        <InputLeftAddon children={<AtSignIcon />} />
                        <Input placeholder="Enter your Full Name" />
                      </InputGroup>

                      <InputGroup>
                        <InputLeftAddon children={<EmailIcon />} />
                        <Input type="email" placeholder="Enter your Email" />
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
                      <Button
                        colorScheme="teal"
                        size="md"
                        w="35%"
                        onClick={onSignUp}
                      >
                        SIGN UP
                      </Button>
                    </Stack>
                    {!isMatch && (
                      <p style={{ color: "red" }}>Passwords do not match</p>
                    )}
                  </Box>
                </Form>
                {/* User Sign up Form Ends */}
              </TabPanel>
              <TabPanel>
                {/* User LOGIN form Begins */}
                <Form action="/userlogin" method="POST">
                  <Box boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" p="5">
                    <Stack spacing={4} align="center">
                      <InputGroup>
                        <InputLeftAddon children={<EmailIcon />} />
                        <Input type="email" placeholder="Enter your Email" />
                      </InputGroup>

                      <InputGroup size="md">
                        <InputLeftAddon children={<LockIcon />} />
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                      <Button
                        colorScheme="teal"
                        size="md"
                        w="35%"
                        onClick={onLogin}
                      >
                        LOGIN
                      </Button>
                    </Stack>
                  </Box>
                </Form>
                {/* User LOGIN Form Ends here */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </div>
  );
};
export default User;
