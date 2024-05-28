import { Checkbox, Divider, Flex } from "@chakra-ui/react";

export interface TodoItemProps {
  isDeleted: boolean;
  tasks: string;
}

export function TodoItem({ isDeleted, tasks }: TodoItemProps) {
  return (
    <>
      <Flex w="full" pt="0.25rem">
        <Checkbox
          // onChange={(e) => setIsItemDeleted(e.target.checked)}
          as={isDeleted ? "del" : undefined}
          checked={isDeleted}
          className="border-gray-400 w-full"
        >
          {tasks}
        </Checkbox>
      </Flex>
      <Divider borderColor="gray.500" />
    </>
  );
}
