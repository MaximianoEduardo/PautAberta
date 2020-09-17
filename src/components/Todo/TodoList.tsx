import React from 'react';
import { TodoListItem } from './TodoListItem'
import styled from 'styled-components'

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const List = styled.ul`
  
      li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 58px;         
          border: none;
          color: var(--primary);
          border-bottom: 1px solid var(--grayBorder);
          >label{
            > input{
              display: none;
            }
            color: var(--primary);
            font-weight: 600;
            font-size: 14px;
          }
      }
`



export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <List>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </List>
  );
};