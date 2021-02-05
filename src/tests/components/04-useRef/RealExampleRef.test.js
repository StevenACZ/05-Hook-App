import { shallow } from 'enzyme';
import React from 'react'

import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
  const wrapper = shallow( <RealExampleRef /> );
  
  test('debe mostrar correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false );
  })

  test('debe de mostrar el componente <MultipleCustomHook />', () => {
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true );
  })
})