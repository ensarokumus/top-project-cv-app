import "./App.css";
import { useState } from "react";
import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";
import example from "./components/example.jsx";
import Education from "./components/Education.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Experience from "./components/Experience.jsx";
import Resume from "./components/Resume.jsx";

function App() {
  // Updating the personal details state on the resume section
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  // Education section interactivity
  const [educationsSection, setEducationsSection] = useState(
    example.sections.educations
  );

  console.log(educationsSection);

  function handleEditEducation() {
    setEditEducation(!isEditEducation);
  }

  // Deleting one of the education info entries
  function handleDeleteEntry(deleteEducationID) {
    setEducationsSection(
      educationsSection.filter((e) => e.id !== deleteEducationID)
    );
  }

  // Adding a new education info entry
  const [isEditEducation, setEditEducation] = useState(false);
  const [nextEducationId, setNextEducationId] = useState(3);

  function handleAddEducation() {
    setEditEducation(!isEditEducation);
    setEducationsSection((currentEducationSection) => {
      return [...currentEducationSection, { id: nextEducationId }];
    });
  }

  function handleEducationsSectionChange(field, value) {
    setEducationsSection((currentEducationSection) => {
      return currentEducationSection.map((education) => {
        if (education.id === nextEducationId) {
          return { ...education, [field]: value };
        }

        return education;
      });
    });
  }

  // Saving the new education info entry
  function handleSaveEducation() {
    setNextEducationId((nextEducationId) => nextEducationId + 1);
    setEditEducation(!isEditEducation);
  }

  // Cancelling the new education info entry
  function handleCancelEducation() {
    setEditEducation(!isEditEducation);
    setEducationsSection(
      educationsSection.filter((e) => e.id !== nextEducationId)
    );
  }

  // Experience section interactivity
  const [experiencesSection, setExperiencesSection] = useState(
    example.sections.experiences
  );

  function handleExperiencesSectionChange(e) {
    const { key } = e.target.dataset;
    setExperiencesSection({ ...experiencesSection, [key]: e.target.value });
  }

  return (
    <Flex>
      <Box minW="500px">
        <PersonalDetails
          fullName={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
          onChange={handlePersonalInfoChange}
        />
        <Accordion allowToggle>
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
            <AccordionItem>
              <AccordionButton>
                <Heading as="h1" size="lg">
                  <Box as="span" flex="1" textAlign="left">
                    Education
                  </Box>
                  <AccordionIcon />
                </Heading>
              </AccordionButton>
              <AccordionPanel>
                <Education
                  isEditEducation={isEditEducation}
                  educationsSection={educationsSection}
                  onDelete={handleDeleteEntry}
                  onAddEducation={handleAddEducation}
                  onChange={handleEducationsSectionChange}
                  onSave={handleSaveEducation}
                  onCancel={handleCancelEducation}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Heading as="h1" size="lg">
                  <Box as="span" flex="1" textAlign="left">
                    Experience
                  </Box>
                  <AccordionIcon />
                </Heading>
              </AccordionButton>
              <AccordionPanel>
                <Experience />
              </AccordionPanel>
            </AccordionItem>
          </Flex>
        </Accordion>
      </Box>
      <Flex>
        <Resume
          personalInfo={personalInfo}
          educationsSection={educationsSection}
          experiencesSection={experiencesSection}
        />
      </Flex>
    </Flex>
  );
}

export default App;
