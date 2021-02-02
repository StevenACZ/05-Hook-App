import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

const MemoHook = () => {
  const { counter, increment } = useCounter( 1000 );
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])

  return (
    <div>
      <h1>Counter: <small> { counter } </small> </h1>
      <hr />

      <p> { memoProcesoPesado } </p>

      <button
        className="btn btn-primary"
        onClick={ increment }
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={ () => {
          setShow( !show );
        } }
      >
        Show/Hide{ show }
      </button>
    </div>
  )
}

export default MemoHook
