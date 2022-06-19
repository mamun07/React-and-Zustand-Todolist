import { Button, Input } from 'antd';
import React, { useState } from 'react';
import useTodolistStore from '../store/todolistStore';

const TodoForm = () => {
  const addTask = useTodolistStore((state) => state.addTodolist);
  const [task, setTask] = useState('');

  const handleTask = () => {
    if (!task) return alert('Please add a task');
    addTask({
      id: Math.ceil(Math.random() * 100),
      task: task,
    });
    setTask('');
  };
  return (
    <div className="form-container">
      <Input.Group compact>
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Type your todays task..."
        />
        <Button
          onClick={() => {
            handleTask();
          }}
          type="primary"
        >
          Add Task
        </Button>
      </Input.Group>
    </div>
  );
};

export default TodoForm;
