import {
  FormControl,
  Input,
  FormLabel,
  Button,
  Stack,
  Flex,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, CloseIcon, AddIcon, EditIcon } from "@chakra-ui/icons";

function Experience({
  isEditExperience,
  experiencesSection,
  activeExperienceForm,
  onDelete,
  onDeleteEntry,
  onAddExperience,
  onChange,
  onSave,
  onCancel,
  onEdit,
}) {
  if (isEditExperience == true) {
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
            value={activeExperienceForm[0].company}
            onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
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
            value={activeExperienceForm[0].position}
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
              placeholder="E.g. 07/2013"
              value={activeExperienceForm[0].startDate}
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
              placeholder="E.g. 06/2015"
              value={activeExperienceForm[0].endDate}
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
            value={activeExperienceForm[0].location}
            onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
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
            value={activeExperienceForm[0].description}
            onChange={(e) => onChange(e.target.dataset.key, e.target.value)}
          />
        </FormControl>
        <Stack direction="row">
          <Button
            leftIcon={<DeleteIcon />}
            colorScheme="orange"
            variant="outline"
            size="sm"
            onClick={onDeleteEntry}
          >
            Delete
          </Button>
          <Button
            leftIcon={<CloseIcon />}
            colorScheme="orange"
            variant="outline"
            size="sm"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="orange"
            variant="solid"
            size="sm"
            onClick={onSave}
          >
            Save
          </Button>
        </Stack>
      </>
    );
  } else {
    return (
      <Flex direction="column">
        {experiencesSection.map((experience) => (
          <Flex
            key={experience.id}
            p="2"
            mb="4"
            borderRadius="lg"
            borderWidth="2px"
            borderColor="orange"
            justify="space-between"
            align="center"
          >
            <Text fontSize="md">{experience.company}</Text>
            <Stack direction="row">
              <IconButton
                aria-label="Edit experience entry"
                icon={<EditIcon />}
                onClick={() => onEdit(experience.id)}
              />
              <IconButton
                aria-label="Delete education entry"
                icon={<DeleteIcon />}
                onClick={() => onDelete(experience.id)}
              />
            </Stack>
          </Flex>
        ))}
        <Button
          leftIcon={<AddIcon />}
          colorScheme="orange"
          variant="solid"
          size="md"
          onClick={onAddExperience}
        >
          Experience
        </Button>
      </Flex>
    );
  }
}

export default Experience;
