import { Flex, Box, Image, Heading,Button,} from "@chakra-ui/react";

const Landing = () => {
  const userLogin = () => {
    setTimeout(() => {
      window.location.href = "/user/signup";
    }, );
  }
    const adminLogin = () => {
    setTimeout(() => {
      window.location.href = "/admin";
    }, );
  }
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

        <Box flex={{ base: "1", md: "0.5" }} maxW="40%" p={5}>
          <Flex direction={{ md: "column" }} align="center">
            <Heading mt={20} mb={100}>E -Voting Login </Heading>
            <Flex direction={{ md: "column" }} align="center">
              <Button colorScheme="blue" border='Blue' m={10} onClick={userLogin}>
                User Login
              </Button>
              <Button colorScheme="blue" m={10} onClick={adminLogin}>
                Admin Login
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Landing;
