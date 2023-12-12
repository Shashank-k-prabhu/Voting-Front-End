import { Flex, Box, Stack, Button, } from "@chakra-ui/react";
import { Link,Outlet } from "react-router-dom";

const UserDash = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box
        flex={{ base: "1", md: "0.5" }}
        maxW="15%"
        p={5}
        mt={0.5}
        mr={2}
        boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
        borderRadius={5}
      >
        <Stack spacing={4} align={"center"}>
          <Link to="/userdash/info">
            <Button bg={"transparent"} px={12}>
              Information
            </Button>
          </Link>
          <Link to="/userdash/votingreg">
            <Button bg={"transparent"} px={12}>
              Voter Register
            </Button>
          </Link>
          <Link to="/userdash/voting">
            <Button bg={"transparent"} px={12}>
              Voting
            </Button>
          </Link>
          <Link to="/user">
            <Button bg={"transparent"} px={12}>
              Logout
            </Button>
          </Link>
        </Stack>
      </Box>

      <Box flex={{ base: "1", md: "0.5" }} maxW="40%" p={5} m={2}>
        <Outlet />
      </Box>
    </Flex>
  );
};
export default UserDash;
