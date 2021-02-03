import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  });

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
    handleAddTodo( newTodo );

    // RESET DEL FORMULARIO
    reset()
  }

  return (
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
  )
}

export default TodoAdd
