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

function PersonalDetails({ onChange, fullName }) {
  return (
    <Flex
      direction="column"
      bg="white"
      p="6"
      m="6"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="orange"
      justify="space-between"
    >
      <Heading as="h1" size="lg" mb="20px">
        Personal Details
      </Heading>
      <FormControl isRequired mb="10px">
        <FormLabel>Full name</FormLabel>
        <Input
          type="text"
          id="name"
          data-key="name"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Mike Richards"
          defaultValue={fullName}
          onChange={onChange}
        />
      </FormControl>
      <FormControl isRequired mb="10px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. mike.richards@mail.com.au"
          defaultValue={example.personalInfo.email}
        />
      </FormControl>
      <FormControl isRequired mb="10px">
        <FormLabel>Phone Number</FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon
            // eslint-disable-next-line
            children="+61"
            borderColor="orange"
            backgroundColor="orange"
          />
          <Input
            type="tel"
            name="tel"
            borderColor="orange"
            placeholder="452 000 000"
            defaultValue={example.personalInfo.tel}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          name="address"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney, NSW"
          defaultValue={example.personalInfo.address}
        />
      </FormControl>
    </Flex>
  );
}

export default PersonalDetails;
