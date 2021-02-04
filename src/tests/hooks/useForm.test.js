import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('pruebas en useForm', () => {
  const initialForm = {
    name: 'fernando',
    email: 'fernando@gmail.com'
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ values ] = result.current;

    expect( values ).toBe( initialForm );
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ , handleInputChange ] = result.current;

    const changeName = 'Melisa';

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: changeName
        }
      })
    })

    expect( result.current[0].name ).toBe( changeName );
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    const [ , handleInputChange, reset ] = result.current

    act( () => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Pepe'
        }
      })
      reset()
    })

    expect(result.current[0]).toBe( initialForm );
  });
})