import { Flex, Image, Heading,Spacer,} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" >
      <Image ml={5} src="https://voterportal.eci.gov.in/static/media/Portallogo.239672214918b407e9c7d3e4312b8ac4.svg" />
      <Spacer />
      <Heading> E Voting Portal</Heading>
      <Spacer />
    </Flex>
    
  );
};
export default Header;
