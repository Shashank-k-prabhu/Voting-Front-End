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


const Admin = () => {
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
          
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </div>
  );
};
export default Admin;
