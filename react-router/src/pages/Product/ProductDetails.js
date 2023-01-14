import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const url = useParams();
    console.log(url);
  return (
    <div>{url.id}</div>
  )
}

export default ProductDetails