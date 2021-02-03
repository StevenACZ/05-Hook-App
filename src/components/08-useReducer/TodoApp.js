import React, { useCallback, useEffect, useReducer } from 'react';
import useForm from '../../hooks/useForm';
import './styles.css';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init);
  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [ todos ])

  const handleToggle = ( { id } ) => {
    dispatch({
      type: 'toggle',
      payload: id
    })
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( description.trim().length <= 1 ) {
      return;
    }

    // CREAR NUEVO TODO
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // DEFINIMOS LA ACCION
    const action = {
      type: 'add',
      payload: newTodo
    };

    // ENVIAMOS LA ACCION CON LA DATA
    dispatch( action );

    // RESET DEL FORMULARIO
    reset()
  };

  const handleDelete = ( { id } ) => {
    const action = {
      type: 'delete',
      payload: id
    }
    
    dispatch( action );
  };

  return (
    <div>
      <h1>TodoApp ({ todos.length }) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* <ul>
            {
              todos.map( (todo, i) => (
                <li
                  key={ todo.id }
                  className="list-group-item"
                >
                  <p
                    className={ `${ todo.done && 'complete' }` }
                    onClick={ () => handleToggle(todo) }
                  > { i } - { todo.desc } </p>
                  <button
                    className="btn btn-danger"
                    onClick={ () => handleDelete(todo) }
                  >
                    Borrar
                  </button>
                </li>
              ))
            }
          </ul> */}

          <TodoList
            todos={ todos }
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form
            className="d-grid gap-2"
            onSubmit={ handleSubmit }  
          >
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender ..."
              autoComplete="off"
              value={ description }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn btn-outline-primary"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
