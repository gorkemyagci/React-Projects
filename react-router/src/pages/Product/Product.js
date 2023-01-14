import React from 'react'
import { Link } from 'react-router-dom'

const product = () => {
  return (
   <div>
    <ul>
        <Link to={"samsung"} style={{
            margin:"10px"
        }}>Samsung</Link>
        <Link to={"apple"} style={{
            margin:"10px"
        }}>Apple</Link>
        <Link to={"huawei"} style={{
            margin:"10px"
        }}>Huawei</Link>
    </ul>
   </div>
  )
}

export default product