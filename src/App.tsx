import {
  Button,
  Card,
  CardBody,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TodoItem, TodoItemInterface } from "./TodoItem";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState<TodoItemInterface[]>([
    { isChecked: false, tasks: "asdasd" },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodoHandler = () => {
    const trimmedNewTodo = newTodo.trim();
    if (trimmedNewTodo.length !== 0) {
      const newTodoList = [...todoList];
      const newTodoItem: TodoItemInterface = {
        tasks: trimmedNewTodo,
        isChecked: false,
      };
      newTodoList.push(newTodoItem);
      setTodoList(newTodoList);
      setNewTodo("");
    }
  };

  const onCheckedHandler = (idx: number) => {
    const newTodoList = [...todoList];
    const changedTodo = newTodoList[idx];
    changedTodo.isChecked = !changedTodo.isChecked;
    newTodoList[idx] = changedTodo;
    setTodoList(newTodoList);
  };

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
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button colorScheme="blue" onClick={addTodoHandler}>
            Add
          </Button>
        </CardBody>
      </Card>
      <Card w="100%" mt="1rem" minH={"10vh"}>
        <CardBody className="flex flex-row">
          <VStack bg="white" className="w-full h-full" justifyItems="center">
            {/* check if todo is empty */}
            {todoList.length > 0 ? (
              todoList.map((todo, idx) => (
                <TodoItem {...todo} onChecked={() => onCheckedHandler(idx)} />
              ))
            ) : (
              <p>Todo is empty</p>
            )}
          </VStack>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
