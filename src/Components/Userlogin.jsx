import {
  Flex,
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

// export const Onsignup = async ({ request }) => {
//    const data = await request.formData();
//    const signup = useSubmit();
//    console.log(request);
//    const submission = {
//      name: data.get("name"),
//      email: data.get("email"),
//      password: data.get("password"),
//    };
//    signup(submission, { method: "post", action: "/usersignup" });

//    console.log(submission);

//    return(
//      setTimeout(() => {
//       window.location.href = "/userdash";
//     }, 2000)
//    );
//  };

const UserLogin = () => {
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
              <Link to="/user/signup">
                <Tab>SIGN UP</Tab>
              </Link>
              <Link to="/user/login">
                <Tab>LOGIN</Tab>
              </Link>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Outlet />
              </TabPanel>
              <TabPanel>
                <Outlet />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </div>
  );
};
export default UserLogin;
