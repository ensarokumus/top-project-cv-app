import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon, EditIcon } from "@chakra-ui/icons";
import example from "./example.jsx";

function Education({
  isEditEducation,
  educationsSection,
  onClick,
  onChange,
  onSave,
}) {
  if (isEditEducation == true) {
    return (
      <>
        <FormControl mb="10px">
          <FormLabel>School</FormLabel>
          <Input
            type="text"
            data-key="school"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="E.g. Sydney University"
            onChange={onChange}
          />
        </FormControl>
        <FormControl mb="10px">
          <FormLabel>Degree</FormLabel>
          <Input
            type="text"
            data-key="degree"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="E.g. Computer Engineering"
            onChange={onChange}
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
              placeholder="E.g. 09/2009"
              onChange={onChange}
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
              placeholder="E.g. 06/2013"
              onChange={onChange}
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
            onChange={onChange}
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
            onClick={onClick}
          >
            Cancel
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="orange"
            variant="solid"
            size="sm"
            onClick={() => {
              onClick;
              onSave;
            }}
          >
            Save
          </Button>
        </Stack>
      </>
    );
  } else {
    const educationsList = educationsSection.map((education) => (
      <Flex
        key={education.degree}
        p="2"
        mb="4"
        borderRadius="lg"
        borderWidth="2px"
        borderColor="orange"
        justify="space-between"
        align="center"
      >
        <Text fontSize="md">{education.school}</Text>
        <Box w="70px">
          <EditIcon boxSize="5" ml="2" />
          <DeleteIcon boxSize="5" ml="2" />
        </Box>
      </Flex>
    ));
    return (
      <Flex direction="column">
        {educationsList}
        <Button
          leftIcon={<AddIcon />}
          colorScheme="orange"
          variant="solid"
          size="md"
          onClick={onClick}
        >
          Education
        </Button>
      </Flex>
    );
  }
}

export default Education;
