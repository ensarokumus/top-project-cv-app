import { Box, Flex, Heading, Divider, Text } from "@chakra-ui/react";

function ExperienceSection({ experiencesSection }) {
  const experiencesList = experiencesSection.toReversed().map((experience) => (
    <Box key={experience.company}>
      <Heading as="h3" fontSize="xl">
        {experience.company}
      </Heading>
      <Text fontSize="lg" mb='2'>
        {experience.position}
      </Text>
      <Text fontSize="sm" color="gray">
        {experience.startDate}
        {" - "}
        {experience.endDate}
      </Text>
      <Text fontSize="sm" color="gray" mb='3'>
        {experience.location}
      </Text>
      <Text fontSize="sm" mb='5'>
        {experience.description}
      </Text>
    </Box>
  ));

  return (
    <>
      <Box ml="10">
        <Flex>
          <Box w="85%">
            <Heading as="h2" fontSize="2xl" pt="2" pb="2">
              EXPERIENCE
            </Heading>
            <Divider borderColor="orange"  mb='5'/>
            {experiencesList}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default ExperienceSection;
