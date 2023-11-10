import React from 'react'
import '../styles/Items.css'
const Items = ({title,desc,thumbnail,price,checkout}) => {
  return (
    <div className='card'>
        <div><img src={thumbnail} alt={title}/></div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>${price}</h3>
        <button onClick={()=>checkout(price)} >Pay Now</button>
    </div>
  )
}

export default Items
