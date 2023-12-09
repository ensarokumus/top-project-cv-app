import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import example from "./example.jsx";

function Experience() {
  return (
    <>
      <FormControl mb="10px">
        <FormLabel>Company Name</FormLabel>
        <Input
          type="text"
          name="company"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Redfin"
          defaultValue={example.sections.experience[0].company}
        />
      </FormControl>
      <FormControl mb="10px">
        <FormLabel>Position Title</FormLabel>
        <Input
          type="text"
          name="title"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Junior Software Engineer"
          defaultValue={example.sections.experience[0].position}
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
          placeholder="E.g. 07/2013"
          defaultValue={example.sections.experience[0].startDate}
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
          placeholder="E.g. 06/2015"
          defaultValue={example.sections.experience[0].endDate}
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
          defaultValue={example.sections.experience[0].location}
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
    </>
  );
}

export default Experience;
