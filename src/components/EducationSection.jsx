import { Box, Flex, Heading, Divider, Text } from "@chakra-ui/react";

function EducationSection({ educationsSection }) {
  const educationsList = educationsSection.map((education) => (
    <Box key={education.degree}>
      <Heading as="h3" fontSize="md" p="5" pb="0">
        {education.degree}
      </Heading>
      <Text fontSize="md" pl="5" pb="1">
        {education.school}
      </Text>
      <Text fontSize="sm" pl="5" color="#c6c6c6">
        {education.startDate}
        {" - "}
        {education.endDate}
      </Text>
      <Text fontSize="sm" pl="5" color="#c6c6c6">
        {education.location}
      </Text>
    </Box>
  ));

  return (
    <>
      <Box mb="3">
        <Flex justify="end">
          <Box w="85%" h="200px">
            <Heading as="h2" fontSize="2xl" pt="2" pb="2">
              EDUCATION
            </Heading>
            <Divider borderColor="orange" />
            {educationsList}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default EducationSection;
