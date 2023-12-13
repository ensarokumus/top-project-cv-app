import {
  Heading,
  FormControl,
  Input,
  InputGroup,
  Flex,
  FormLabel,
  InputLeftAddon,
} from "@chakra-ui/react";
import example from "./example.jsx";

function PersonalDetails({ onChange, fullName, email, phone, address }) {
  return (
    <Flex
      direction="column"
      bg="white"
      p="6"
      m="6"
      borderRadius="lg"
      borderWidth="2px"
      borderColor="orange"
      justify="space-between"
    >
      <Heading as="h1" size="lg" mb="20px">
        Personal Details
      </Heading>
      <FormControl isRequired mb="20px">
        <FormLabel mb='0'>Full name</FormLabel>
        <Input
          type="text"
          data-key="name"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Mike Richards"
          onChange={onChange}
        />
      </FormControl>
      <FormControl isRequired mb="20px">
        <FormLabel mb='0'>Email</FormLabel>
        <Input
          type="email"
          data-key="email"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. mike.richards@mail.com.au"
          onChange={onChange}
        />
      </FormControl>
      <FormControl isRequired mb="20px">
        <FormLabel mb='0'>Phone Number</FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            // eslint-disable-next-line
            children="+61"
            borderColor="orange"
            backgroundColor="orange"
          />
          <Input
            type="tel"
            data-key="phone"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="452 000 000"
            onChange={onChange}
            pl='2'
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel mb='0'>Address</FormLabel>
        <Input
          type="text"
          data-key="address"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney, NSW"
          onChange={onChange}
        />
      </FormControl>
    </Flex>
  );
}

export default PersonalDetails;
