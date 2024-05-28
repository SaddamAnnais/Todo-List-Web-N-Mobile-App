import { Checkbox, Divider, Flex } from "@chakra-ui/react";

interface TodoItemProps extends TodoItemInterface {
  onChecked: () => void;
}

export interface TodoItemInterface {
  isChecked: boolean;
  tasks: string;
}

export function TodoItem({ isChecked, tasks, onChecked }: TodoItemProps) {
  return (
    <>
      <Flex w="full" pt="0.25rem">
        <Checkbox
          onChange={onChecked}
          as={isChecked ? "del" : undefined}
          checked={isChecked}
          className="border-gray-400 w-full"
        >
          {tasks}
        </Checkbox>
      </Flex>
      <Divider borderColor="gray.500" />
    </>
  );
}
