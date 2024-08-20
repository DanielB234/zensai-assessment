import React, { useState } from 'react';
import { Stack, IStackTokens, IStackStyles } from '@fluentui/react';

import './App.css';
import { AddTodoDialog } from './components/TodoList';

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
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }
  const addTodo = (name: string, description: string): void => {

  }
  return (
    <Stack horizontalAlign="center"  verticalFill styles={stackStyles} tokens={stackTokens}>
      <button onClick={handleOpenDialog}>Add Todo</button>
      <AddTodoDialog open={open} setOpen={setOpen} addTodo={addTodo}></AddTodoDialog>
    </Stack>
  );
};
