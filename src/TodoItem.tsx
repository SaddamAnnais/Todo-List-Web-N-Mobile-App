import { Checkbox, Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface TodoItemProps {
  isDeleted: boolean;
}

export function TodoItem({ isDeleted }: TodoItemProps) {
  const [isItemDeleted, setIsItemDeleted] = useState(isDeleted);

  return (
    <>
      <Flex w="full" pt="0.25rem">
        <Checkbox
          onChange={(e) => setIsItemDeleted(e.target.checked)}
          as={isItemDeleted ? "del" : undefined}
          checked={isItemDeleted}
          className="border-gray-400 w-full"
        >
          Placeholder for each tasks
        </Checkbox>
      </Flex>
      <Divider borderColor="gray.500" />
    </>
  );
}
