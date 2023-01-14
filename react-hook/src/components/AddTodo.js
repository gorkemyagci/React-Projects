import React, { memo } from 'react'

function AddTodo({handleSubmit, handleSearch, product}) {
  console.log("Add Todo");
  return (
    <form onSubmit={handleSubmit}>
        <input
        name="text"
        value={product}
        onChange={handleSearch}
        />
        <button disabled={!product} type="submit">Ekle</button>
      </form>
  )
}

export default memo(AddTodo);