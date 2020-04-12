import React, { useEffect } from 'react'

import './count.css'
import Todo from '../todo'
import { withStore } from '../hoc'

const Count = ({ store }) => {
  const {
    count,
    loading,
    todo,
    decreaseHandler,
    increaseHandler
  } = store.counter

  useEffect(() => {
    increaseHandler()
  }, [])

  return (
    <div className="count">
      <div className="count__number">{count}</div>
      <button className="count__increase-btn" onClick={increaseHandler}>
        +
      </button>
      <button className="count__decrease-btn" onClick={decreaseHandler}>
        -
      </button>

      <Todo todo={todo} loading={loading} />
    </div>
  )
}

export default withStore(Count)
