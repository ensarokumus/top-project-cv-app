// import { useState } from "react";
// import "./App.css";
import {
  Flex
} from "@chakra-ui/react";
import Education from "./components/Education.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";

function App() {
  return (
    <>
      <Flex direction='column'>
        <PersonalDetails />
        <Education />
      </Flex>
    </>
  );
}

export default App;
