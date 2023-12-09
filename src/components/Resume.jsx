import { Flex } from "@chakra-ui/react";
import PersonalDetailsSection from "./PersonalDetailsSection";

function Resume({ personalInfo }) {
  return (
    <Flex m="6" ml="0">
      <Flex
        direction="column"
        borderWidth="1px"
        color="white"
        backgroundColor="#212027"
        justify="space-between"
      >
        <PersonalDetailsSection name={personalInfo.name} email={personalInfo.email} phone={personalInfo.phone} address={personalInfo.address} />
      </Flex>
      <Flex
        direction="column"
        borderWidth="1px"
        color="#212027"
        backgroundColor="white"
        justify="space-between"
      >
        Sag Taraf
      </Flex>
    </Flex>
  );
}

export default Resume;
