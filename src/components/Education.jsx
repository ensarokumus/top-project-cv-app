import {
  Heading,
  FormControl,
  Input,
  Flex,
  FormLabel,
  Button,
  Stack,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { example } from "./example.jsx";

function Education() {
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
        Education
      </Heading>
      <FormControl mb="10px">
        <FormLabel>School</FormLabel>
        <Input
          type="text"
          name="school"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney University"
          value={example.education[0].school}
        />
      </FormControl>
      <FormControl mb="10px">
        <FormLabel>Degree</FormLabel>
        <Input
          type="text"
          name="degree"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Computer Engineering"
          value={example.education[0].degree}
        />
      </FormControl>
      <FormControl mb="10px">
        <FormLabel>Start Date</FormLabel>
        <Input
          type="text"
          name="startDate"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. 09/2009"
          value={example.education[0].startDate}
        />
      </FormControl>
      <FormControl mb="10px">
        <FormLabel>End Date</FormLabel>
        <Input
          type="text"
          name="endDate"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. 06/2013"
          value={example.education[0].endDate}
        />
      </FormControl>
      <FormControl mb="20px">
        <FormLabel>Location</FormLabel>
        <Input
          type="text"
          name="location"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney, NSW"
          value={example.education[0].location}
        />
      </FormControl>
      <Stack direction='row'>
        <Button leftIcon={<DeleteIcon />} colorScheme="orange" variant="outline" size='sm'>
          Delete
        </Button>
        <Button leftIcon={<CloseIcon />} colorScheme="orange" variant="outline" size='sm'>
          Cancel
        </Button>
        <Button leftIcon={<AddIcon />} colorScheme="orange" variant="solid" size='sm'>
          Save
        </Button>
      </Stack>
    </Flex>
  );
}

export default Education;
