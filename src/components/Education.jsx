import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon, EditIcon } from "@chakra-ui/icons";

function Education({
  onDelete,
  isEditEducation,
  onAddEducation,
  onSave,
  educationsSection,
  onClick,
  onChange,
}) {
  if (isEditEducation == true) {
    return (
      <>
        <FormControl mb="10px">
          <FormLabel>Degree</FormLabel>
          <Input
            type="text"
            data-key="degree"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="E.g. Computer Engineering"
            onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
          />
        </FormControl>
        <FormControl mb="10px">
          <FormLabel>School</FormLabel>
          <Input
            type="text"
            data-key="school"
            variant="flushed"
            borderColor="orange"
            size="sm"
            placeholder="E.g. Sydney University"
            onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
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
              onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
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
              onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
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
            onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
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
            // onClick={onSave()}
          >
            Save
          </Button>
        </Stack>
      </>
    );
  } else {
    return (
      <Flex direction="column">
        {educationsSection.map(education => (
          <Flex
            key={education.id}
            p="2"
            mb="4"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="orange"
            justify="space-between"
            align="center"
          >
            <Text fontSize="md">{education.school}</Text>
            <Stack direction="row">
              <IconButton
                aria-label="Edit education entry"
                icon={<EditIcon />}
              />
              <IconButton
                aria-label="Delete education entry"
                icon={<DeleteIcon />}
                onClick={() => onDelete(education.id)}
              />
            </Stack>
          </Flex>
        ))}
        <Button
          leftIcon={<AddIcon />}
          colorScheme="orange"
          variant="solid"
          size="md"
          onClick={onAddEducation}
        >
          Education
        </Button>
      </Flex>
    );
  }
}

export default Education;
