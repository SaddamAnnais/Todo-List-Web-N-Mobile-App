import { Button, Checkbox, Divider, Flex } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

export interface TodoItemInterface {
  isChecked: boolean;
  tasks: string;
}

interface TodoItemProps extends TodoItemInterface {
  onChecked: () => void;
  onDelete: () => void;
}

export function TodoItem({
  isChecked,
  tasks,
  onChecked,
  onDelete,
}: TodoItemProps) {
  return (
    <>
      <Flex w="full" pt="0.25rem">
        <Checkbox
          onChange={onChecked}
          // if checked, it will have a strike-through style
          as={isChecked ? "del" : undefined}
          checked={isChecked}
          className="border-gray-400 w-full"
        >
          {tasks}
        </Checkbox>
        <Button colorScheme="red" onClick={onDelete}>
          <FaTrashAlt />
        </Button>
      </Flex>
      <Divider borderColor="gray.500" />
    </>
  );
}
