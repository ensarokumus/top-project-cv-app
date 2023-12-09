import { Flex, Heading } from "@chakra-ui/react";

function PersonalDetailsSection({ name, email, phone, address }) {
  return (
   <>
   <Heading>{name}</Heading>
   <Heading>{email}</Heading>
   <Heading>{phone}</Heading>
   <Heading>{address}</Heading>
   </>
  );
}

export default PersonalDetailsSection;
