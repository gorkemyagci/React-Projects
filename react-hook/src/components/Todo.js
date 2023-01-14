import React, { memo } from 'react'

function Todo({product}) {
    console.log(product);
  return (
    <li>{product}</li>
  )
}

export default memo(Todo);