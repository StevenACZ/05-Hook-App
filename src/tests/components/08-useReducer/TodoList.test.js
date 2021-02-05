import { shallow } from 'enzyme'
import React from 'react'
import TodoList from '../../../components/08-useReducer/TodoList'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en <TodoList />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wraper = shallow(
    <TodoList
      todos={ demoTodos }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  )
  test('debe de mostrarse correctamente', () => {
    expect( wraper ).toMatchSnapshot();
  })

  test('debe de tener dos <TodoListItem />', () => {
    expect( wraper.find('TodoListItem').length ).toBe( demoTodos.length )
    expect( wraper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
  })
})