import React, { useState } from "react";
import { Container, Heading, Input, Button, IconButton, Text, VStack, HStack, Spacer, Box, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" />
          <IconButton aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} />
        </HStack>
        {todos.map((todo, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md">
            <HStack>
              <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
              <Text flex={1} textDecoration={todo.completed ? "line-through" : "none"}>
                {todo.text}
              </Text>
              <Spacer />
              <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
