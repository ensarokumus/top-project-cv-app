import { Flex, Heading, Box } from "@chakra-ui/react";
import PersonalDetailsSection from "./PersonalDetailsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function Resume({ personalInfo, educationsSection, experiencesSection }) {
  return (
    <Flex m="6" ml="0" borderWidth="2px" borderColor='orange' h='85vh'>
      <Flex
        direction="column"
        color="white"
        backgroundColor="#212027"
        justify="flex-start"
        pt="6"
      >
        <PersonalDetailsSection
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
        />
        <EducationSection educationsSection={educationsSection} />
      </Flex>
      <Flex
        direction="column"
        color="#212027"
        backgroundColor="white"
        // justify="space-between"
      >
        <Flex backgroundColor="orange" w='600px' h='142px' direction='column' justifyContent='center' mt='24px' mb='24px'>
          <Heading as='h1' fontSize='3rem' textAlign='center'>{personalInfo.name}</Heading>
          <Heading as='h2' fontSize='1.5rem' textAlign='center'>{educationsSection[0].degree}</Heading>
        </Flex>
        <ExperienceSection experiencesSection={experiencesSection} />
      </Flex>
    </Flex>
  );
}

export default Resume;
