import React from 'react';
import { shallow } from "enzyme";
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useFetch from "../../../hooks/useFetch";
import useCounter from "../../../hooks/useCounter";

jest.mock( "../../../hooks/useFetch" );
jest.mock( "../../../hooks/useCounter" );

beforeEach( () => {
  useCounter.mockReturnValue({
      counter: 10,
      increment: () => {}
  })
})

describe('Pruebas en <MultipleCustomHook />', () => {
  test('debe de mostrase correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe de mostrar la information', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Fernando',
        quote: 'Hola mundo'
      }],
      loading: false,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks /> );
    expect( wrapper.find('.alert').exists() ).toBe( false );
    expect( wrapper.find('.mb-3').text().trim() ).toBe( 'Hola mundo' );
    expect( wrapper.find('footer').text().trim() ).toBe( 'Fernando' );
  })
})