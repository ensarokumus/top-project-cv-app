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

  // Experience section interactivity
  const [experiencesSection, setExperiencesSection] = useState(
    example.sections.experiences
  );

  // Deleting one of the education info entries
  function handleDelete(deleteEducationID) {
    setEducationsSection(
      educationsSection.filter((e) => e.id !== deleteEducationID)
    );
  }

  // Deleting one of the experience info entries
  function handleDeleteExperience(deleteExperienceID) {
    setExperiencesSection(
      experiencesSection.filter((e) => e.id !== deleteExperienceID)
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

  // Adding a new experience info entry
  const [isEditExperience, setEditExperience] = useState(false);
  const [nextExperienceId, setNextExperienceId] = useState(3);
  const [activeExperienceForm, setActiveExperienceForm] = useState([
    {
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ]);

  function handleAddExperience() {
    setEditExperience(!isEditExperience);
    setExperiencesSection((currentExperiencesSection) => {
      return [
        ...currentExperiencesSection,
        {
          id: nextExperienceId,
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ];
    });
    setActiveExperienceForm(() => {
      return [
        {
          id: nextExperienceId,
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ];
    });
  }

  // Editing an education entry

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

  // Editing an experience entry

  function handleExperiencesSectionChange(field, value) {
    setExperiencesSection((currentExperiencesSection) => {
      return currentExperiencesSection.map((experience) => {
        if (experience.id === activeExperienceForm[0].id) {
          return { ...experience, [field]: value };
        }

        return experience;
      });
    });

    setActiveExperienceForm((currentExperiencesSection) => {
      return currentExperiencesSection.map((experience) => {
        if (experience.id === activeExperienceForm[0].id) {
          return { ...experience, [field]: value };
        }

        return experience;
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

  // Editing an old experience info entry
  const [beforeEditExperience, setBeforeEditExperience] = useState("");

  function handleEditExperience(editExperienceID) {
    setEditExperience(!isEditExperience);
    setActiveExperienceForm(
      experiencesSection.filter((e) => e.id === editExperienceID)
    );
    setBeforeEditExperience(
      experiencesSection.filter((e) => e.id === editExperienceID)
    );
  }

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

  // Saving the new experience info entry
  function handleSaveExperience() {
    setNextExperienceId((nextExperienceId) => nextExperienceId + 1);
    setEditExperience(!isEditExperience);
    setActiveExperienceForm([
      {
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  }

  // Cancelling the new education info entry
  function handleCancelEducation() {
    setEditEducation(!isEditEducation);

    if (
      educationsSection[educationsSection.length - 1].id === activeForm[0].id &&
      nextEducationId - 1 !== educationsSection.length
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

  // Cancelling the new experience info entry
  function handleCancelExperience() {
    setEditExperience(!isEditExperience);

    if (
      experiencesSection[experiencesSection.length - 1].id ===
      activeExperienceForm[0].id &&
      nextExperienceId - 1 !== experiencesSection.length
    ) {
      setExperiencesSection(
        experiencesSection.filter((e) => e.id !== nextExperienceId)
      );
    } else {
      setExperiencesSection((currentExperiencesSection) => {
        return currentExperiencesSection.map((experience) => {
          if (experience.id === beforeEditExperience[0].id) {
            return {
              ...experience,
              id: beforeEditExperience[0].id,
              company: beforeEditExperience[0].company,
              position: beforeEditExperience[0].position,
              startDate: beforeEditExperience[0].startDate,
              endDate: beforeEditExperience[0].endDate,
              location: beforeEditExperience[0].location,
              description: beforeEditExperience[0].description,
            };
          }

          return experience;
        });
      });
    }

    setActiveExperienceForm([
      {
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
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

  // Deleting the new experience info entry
  function handleDeleteExperienceEntry() {
    setEditExperience(!isEditExperience);
    setExperiencesSection(
      experiencesSection.filter((e) => e.id !== activeExperienceForm[0].id)
    );
    setActiveExperienceForm([
      {
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
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
                <Experience
                  isEditExperience={isEditExperience}
                  experiencesSection={experiencesSection}
                  activeExperienceForm={activeExperienceForm}
                  onDelete={handleDeleteExperience}
                  onDeleteEntry={handleDeleteExperienceEntry}
                  onAddExperience={handleAddExperience}
                  onChange={handleExperiencesSectionChange}
                  onSave={handleSaveExperience}
                  onCancel={handleCancelExperience}
                  onEdit={handleEditExperience}
                />
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
