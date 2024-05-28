import {
  Button,
  Card,
  CardBody,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TodoItem } from "./TodoItem";

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
            borderColor="gray.500"
            placeholder="What do you need to accomplish?"
            mr="1rem"
          />
          <Button colorScheme="blue">Add</Button>
        </CardBody>
      </Card>
      <Card w="100%" mt="1rem" minH={"10vh"}>
        <CardBody className="flex flex-row">
          <VStack bg="white" className="w-full h-full" justifyItems="center">
              <TodoItem isDeleted={false} />
              <TodoItem isDeleted={false} />
              <TodoItem isDeleted={false} />
              <TodoItem isDeleted={false} />
              <TodoItem isDeleted={false} />
          </VStack>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
