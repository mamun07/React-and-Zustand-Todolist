import React from 'react';
import useTodolistStore from '../store/todolistStore';

import { Card, Checkbox, List, Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { Text } = Typography;

const TodoList = () => {
  const { todolists, editTodolist, removeTodolist, toggleTodolistStatus } =
    useTodolistStore((state) => ({
      todolists: state.todolists,
      editTodolist: state.editTodolist,
      removeTodolist: state.removeTodolist,
      toggleTodolistStatus: state.toggleTodolistStatus,
    }));
  return (
    <List
      itemLayout="horizontal"
      dataSource={todolists}
      renderItem={(todolist) => (
        <Card size="small">
          <List.Item
            actions={[
              <EditOutlined
                onClick={() => {
                  removeTodolist(todolist.id);
                }}
              />,
              <DeleteOutlined
                onClick={() => {
                  removeTodolist(todolist.id);
                }}
              />,
            ]}
          >
            <div className="single-tasklist">
              <Checkbox
                checked={todolist.completed}
                onChange={(e) => {
                  toggleTodolistStatus(todolist.id);
                }}
                value={todolist?.task}
                style={{ marginRight: '15px' }}
              />
              {todolist.completed ? (
                <Text delete italic disabled>
                  {todolist?.task}
                </Text>
              ) : (
                <Text>{todolist?.task}</Text>
              )}
            </div>
          </List.Item>
        </Card>
      )}
    />
  );
};

export default TodoList;
