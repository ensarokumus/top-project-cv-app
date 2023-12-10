// import "./App.css";
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
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);
  // console.log(personalInfo);
  
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <Flex>
      <Flex direction="column">
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
            borderWidth="1px"
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
                <Education />
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
      </Flex>
      <Resume personalInfo={personalInfo}/>
    </Flex>
  );
}

export default App;
