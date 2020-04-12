import React from 'react'

const Todo = ({ todo = {}, loading }) => {
  const { id, title } = todo

  if (!id) return ''

  return (
    <div className="todo">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <span>
          {id}: {title}
        </span>
      )}
    </div>
  )
}

export default Todo
