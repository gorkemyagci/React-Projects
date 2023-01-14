import React, { memo } from 'react'
import Todo from './Todo';

function Todos({products}) {
    console.log("Todos", products);
    return (
        <ul>
            {products.map((prd, index) => {
                return (
                   <Todo product={prd} key={index}/>
                )
            })}
        </ul>
    )
}
export default memo(Todos);