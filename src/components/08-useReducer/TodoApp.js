import React, { useEffect, useReducer } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [ todos ])

  const handleDelete = ( { id } ) => {
    const action = {
      type: 'delete',
      payload: id
    }
    
    dispatch( action );
  };

  const handleToggle = ( { id } ) => {
    dispatch({
      type: 'toggle',
      payload: id
    })
  };

  const handleAddTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  return (
    <div>
      <h1>TodoApp ({ todos.length }) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={ todos }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd
            handleAddTodo={ handleAddTodo }
          />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
