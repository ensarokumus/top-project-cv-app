import { Flex, Heading, AspectRatio } from "@chakra-ui/react";
import PersonalDetailsSection from "./PersonalDetailsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function Resume({ personalInfo, educationsSection, experiencesSection }) {
  return (
    <Flex m="6" ml="0" borderWidth="2px" borderColor='orange' maxW='950px' minW='800px' minH='1200px'>
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
        backgroundColor="white"
      >
        <Flex backgroundColor="orange" h='142px' direction='column' justifyContent='center' mt='24px' mb='24px'>
          <Heading as='h1' fontSize='3rem' color='#363740' textAlign='center'>{personalInfo.name}</Heading>
          <Heading as='h2' fontSize='1.5rem' color='#535565' textAlign='center'>{experiencesSection[experiencesSection.length - 1].position}</Heading>
        </Flex>
        <ExperienceSection experiencesSection={experiencesSection} />
      </Flex>
    </Flex>
  );
}

export default Resume;
