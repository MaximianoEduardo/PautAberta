import React, { useState } from 'react'
import { Container } from './styles'
import { PlusOutlined } from '@ant-design/icons'

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ( { addTodo } ) => {

    const [text, setText] = useState('');

    return (
        <Container>
             <form>
                <input
                    type="text"
                    value={text}
                    onChange={e => {
                    setText(e.target.value);
                    }}
                    placeholder='Criar uma Tarefa'
                />
                <button
                    type="submit"
                    onClick={e => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                    }}
                >
                    <PlusOutlined className='fill' />
                </button>
            </form>
        </Container>
       
    );

}