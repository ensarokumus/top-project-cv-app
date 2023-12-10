import { Box, Flex, Text } from "@chakra-ui/react";

function PersonalDetailsSection({ email, phone, address }) {
  return (
    <>
      <Box mb="3">
        <Flex>
          <Box backgroundColor="orange" w="60px" h="25px"></Box>
          <Flex
            backgroundColor="#353740"
            h="25px"
            pl="20px"
            as="b"
            flex="1"
            fontSize="md"
          >
            Phone
          </Flex>
        </Flex>
        <Text pl="80px" fontSize="sm">
          {phone}
        </Text>
      </Box>
      <Box mb="3">
        <Flex>
          <Box backgroundColor="orange" w="60px" h="25px"></Box>
          <Flex
            backgroundColor="#353740"
            h="25px"
            pl="20px"
            as="b"
            flex="1"
            fontSize="md"
          >
            Email
          </Flex>
        </Flex>
        <Text pr="5" pl="80px" fontSize="sm">
          {email}
        </Text>
      </Box>
      <Box mb="3">
        <Flex>
          <Box backgroundColor="orange" w="60px" h="25px"></Box>
          <Flex backgroundColor="#353740" h="25px" pl="20px" as="b" flex="1">
            Address
          </Flex>
        </Flex>
        <Text pr="5" pl="80px" fontSize="sm">
          {address}
        </Text>
      </Box>
    </>
  );
}

export default PersonalDetailsSection;
