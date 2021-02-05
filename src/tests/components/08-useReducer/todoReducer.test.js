import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer( demoTodos, {} );
    
    expect( state ).toEqual( demoTodos );
  })
  
  test('debe de agregar un TODO', () => {
    const newTodo = {
      id: 4,
      desc: 'Learn English',
      done: false
    };

    const state = todoReducer( demoTodos, { type: 'add', payload: newTodo } );
    expect( state.length ).toEqual( 3 )
    expect( state ).toEqual( [ ...demoTodos, newTodo ] )
  })
})