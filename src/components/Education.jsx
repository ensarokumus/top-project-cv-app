import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import example from "./example.jsx";

function Education() {
  return (
    <>
      <FormControl mb="10px">
        <FormLabel>School</FormLabel>
        <Input
          type="text"
          name="school"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney University"
          defaultValue={example.sections.education[0].school}
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
          defaultValue={example.sections.education[0].degree}
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
          // defaultValue={example.sections.education[0].startDate}
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
          // defaultValue={example.sections.education[0].endDate}
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
          // defaultValue={example.sections.education[0].location}
        />
      </FormControl>
      <Stack direction="row">
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="orange"
          variant="outline"
          size="sm"
        >
          Delete
        </Button>
        <Button
          leftIcon={<CloseIcon />}
          colorScheme="orange"
          variant="outline"
          size="sm"
        >
          Cancel
        </Button>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="orange"
          variant="solid"
          size="sm"
        >
          Save
        </Button>
      </Stack>
    </>
  );
}

export default Education;
