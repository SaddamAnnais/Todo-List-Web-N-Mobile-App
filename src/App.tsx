import {
  Button,
  Card,
  CardBody,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function App() {
  return (
    <div className="px-4 py-4 max-w-screen-lg flex flex-col items-center w-full ">
      <div className="flex flex-row w-full justify-center">
        <IoCheckmarkDoneSharp size="3rem" color="white" />
        <Heading as="h1" className="italic" color="white">
          ToDos
        </Heading>
      </div>
      <Card w="100%" mt="1rem">
        <CardBody className="flex flex-row">
          <Input
            borderColor="gray"
            placeholder="What do you need to accomplish?"
            mr="1rem"
          />
          <Button colorScheme="blue">Add</Button>
        </CardBody>
      </Card>
      <Card w="100%" mt="1rem">
        <CardBody className="flex flex-row">
          <VStack bg="white" className="w-full h-full ">
            <p>Placeholder for each tasks</p>
          </VStack>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
