import { shallow } from "enzyme"
import TodoListItem from "../../../components/08-useReducer/TodoListItem"

import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {
  
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const index = 0;

  const wrapper = shallow(
    <TodoListItem
      todo={ demoTodos[index] }
      index={ index }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  )

  test('debe de mostrar correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('debe de llamar la funcion handleDelete', () => {
    wrapper.find('button').simulate('click');
    expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0] );
  })

  test('debe de llamar la funcion handleToggle', () => {
    wrapper.find('p').simulate('click');
    expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0] );
  })

  test('debe de mostrar el texto correctamente', () => {
    const p = wrapper.find('p');
    // console.log(p.text().trim());
    // console.log( `${ index + 1 } - ${ demoTodos[index].desc }` );
    expect( p.text().trim() ).toEqual( `${ index + 1 } - ${ demoTodos[index].desc }` );
  })

  test('debe de tener la clase complete si el TODO.done = true', () => {
    const index = 0;
    const todo = demoTodos[index];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={ todo }
        index={ index }
      /> 
    );

    expect( wrapper.find('p').hasClass('complete') ).toBe( true );
  })
})