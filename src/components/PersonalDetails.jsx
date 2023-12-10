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
          data-key="email"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. mike.richards@mail.com.au"
          defaultValue={email}
          onChange={onChange}
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
            data-key="phone"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="452 000 000"
            defaultValue={phone}
            onChange={onChange}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          data-key="address"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney, NSW"
          defaultValue={address}
          onChange={onChange}
        />
      </FormControl>
    </Flex>
  );
}

export default PersonalDetails;
