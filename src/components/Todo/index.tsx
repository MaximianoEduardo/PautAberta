import React, { useState } from 'react'
import { AddTodoForm } from './AddTodo'
import { TodoList } from './TodoList'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const initialTodos: Todo[] = [
    {
      text: 'Fechar negócio com Ricardo',
      complete: false,
    },
    {
      text: 'Ampliar atividade da semana que vem',
      complete: true,
    },
    {
      text: 'Depositar na caixa',
      complete: true,
    }
    
  ];


const  TodoApp:React.FC = () => {

    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (selectedTodo: Todo) => {
      const newTodos = todos.map(todo => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      setTodos(newTodos);
    };
  
    const addTodo: AddTodo = (text: string) => {
        const newTodo = { text, complete: false };
        setTodos([...todos, newTodo]);
    };

    return( 
        <Container>
            <AddTodoForm  addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </Container>
        
    )
}

export default TodoApp;