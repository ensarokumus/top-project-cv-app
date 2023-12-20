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

  // Deleting one of the education info entries
  function handleDelete(deleteEducationID) {
    setEducationsSection(
      educationsSection.filter((e) => e.id !== deleteEducationID)
    );
  }

  // Adding a new education info entry
  const [isEditEducation, setEditEducation] = useState(false);
  const [nextEducationId, setNextEducationId] = useState(3);
  const [activeForm, setActiveForm] = useState([
    {
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  function handleAddEducation() {
    setEditEducation(!isEditEducation);
    setEducationsSection((currentEducationSection) => {
      return [
        ...currentEducationSection,
        {
          id: nextEducationId,
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      ];
    });
    setActiveForm(() => {
      return [
        {
          id: nextEducationId,
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      ];
    });
  }

  function handleEducationsSectionChange(field, value) {
    setEducationsSection((currentEducationSection) => {
      return currentEducationSection.map((education) => {
        if (education.id === activeForm[0].id) {
          return { ...education, [field]: value };
        }

        return education;
      });
    });

    setActiveForm((currentEducationSection) => {
      return currentEducationSection.map((education) => {
        if (education.id === activeForm[0].id) {
          return { ...education, [field]: value };
        }

        return education;
      });
    });
  }

  // Editing an old education info entry
  const [beforeEdit, setBeforeEdit] = useState("");

  function handleEditEducation(editEducationID) {
    setEditEducation(!isEditEducation);
    setActiveForm(educationsSection.filter((e) => e.id === editEducationID));
    setBeforeEdit(educationsSection.filter((e) => e.id === editEducationID));
  }

  console.log(activeForm[0].id);

  // Saving the new education info entry
  function handleSaveEducation() {
    setNextEducationId((nextEducationId) => nextEducationId + 1);
    setEditEducation(!isEditEducation);
    setActiveForm([
      {
        id: "",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  }

  // Cancelling the new education info entry
  function handleCancelEducation() {
    setEditEducation(!isEditEducation);

    if (
      educationsSection[educationsSection.length - 1].id === activeForm[0].id
    ) {
      setEducationsSection(
        educationsSection.filter((e) => e.id !== nextEducationId)
      );
    } else {
      setEducationsSection((currentEducationSection) => {
        return currentEducationSection.map((education) => {
          if (education.id === beforeEdit[0].id) {
            return {
              ...education,
              id: beforeEdit[0].id,
              school: beforeEdit[0].school,
              degree: beforeEdit[0].degree,
              startDate: beforeEdit[0].startDate,
              endDate: beforeEdit[0].endDate,
              location: beforeEdit[0].location,
            };
          }

          return education;
        });
      });
    }

    setActiveForm([
      {
        id: "",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  }

  // Deleting the new education info entry
  function handleDeleteEntry() {
    setEditEducation(!isEditEducation);
    setEducationsSection(
      educationsSection.filter((e) => e.id !== activeForm[0].id)
    );
    setActiveForm([
      {
        id: "",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
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
          personalInfo={personalInfo}
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
                  activeForm={activeForm}
                  onDelete={handleDelete}
                  onDeleteEntry={handleDeleteEntry}
                  onAddEducation={handleAddEducation}
                  onChange={handleEducationsSectionChange}
                  onSave={handleSaveEducation}
                  onCancel={handleCancelEducation}
                  onEdit={handleEditEducation}
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
