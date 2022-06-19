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
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className="form-input"
      />
      <button
        onClick={() => {
          handleTask();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TodoForm;
