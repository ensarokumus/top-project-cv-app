import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import example from "./example.jsx";

function experience() {
  return (
    <>
      <FormControl mb="10px">
        <FormLabel>Company Name</FormLabel>
        <Input
          type="text"
          data-key="company"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Redfin"
        />
      </FormControl>
      <FormControl mb="10px">
        <FormLabel>Position Title</FormLabel>
        <Input
          type="text"
          data-key="position"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Junior Software Engineer"
        />
      </FormControl>
      <Flex>
        <FormControl mb="10px">
          <FormLabel>Start Date</FormLabel>
          <Input
            type="text"
            data-key="startDate"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="E.g. 07/2013"
          />
        </FormControl>
        <FormControl mb="10px">
          <FormLabel>End Date</FormLabel>
          <Input
            type="text"
            data-key="endDate"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="E.g. 06/2015"
          />
        </FormControl>
      </Flex>
      <FormControl mb="20px">
        <FormLabel>Location</FormLabel>
        <Input
          type="text"
          data-key="location"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney, NSW"
        />
      </FormControl>
      <FormControl mb="20px">
        <FormLabel>Description</FormLabel>
        <Input
          type="textArea"
          data-key="location"
          variant="flushed"
          borderColor="orange"
          size="sm"
          placeholder="E.g. Sydney, NSW"
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

export default experience;
