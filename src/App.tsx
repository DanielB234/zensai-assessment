import React, { useState } from 'react';
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';
import { Todo } from './TodoTypes';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { AddTodoDialog } from './components/TodoDialog';

const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '50 auto',
    top:'200px',
    textAlign: 'center',
    color: '#605e5c',
  },
};

export const App: React.FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [TodoList,setTodoList] = useState<Todo[]>([]);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const addTodo = (name: string, description: string): void => {
    const newTodo: Todo = {
      id: uuidv4(),
      name: name,
      description: description,
      state: 'incomplete'
    }
    setTodoList([...TodoList,newTodo])
  }

  return (
    <Stack horizontalAlign="center"  verticalFill styles={stackStyles} tokens={stackTokens}>
      <button onClick={handleOpenDialog}>Add Todo</button>
      <AddTodoDialog open={open} setOpen={setOpen} addTodo={addTodo}></AddTodoDialog>
    </Stack>
  );
};
