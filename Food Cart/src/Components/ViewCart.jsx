import { useContext, useEffect, useState } from 'react'
import './ViewCart.css'
import { GreantContext } from '../App'

export const ViewCart = () => {
  const[cart,setCart]=useContext(GreantContext)
  const [totalValue,setTotalValue] =useState(0)


  useEffect(()=>{
    setTotalValue(cart.reduce((acc,cur)=>acc+parseInt(cur.AMT),0))
  },[cart])

  const handleDelete=(ID)=>{
    setCart(cart.filter((item)=>item.ID !== ID))
  }
  return (
    <div className='viwe-con'>
      
        {cart.map((item)=>(
          <div className='viwe-cart' key={item.ID}>
          <div className='cart-img'>
          <img src={item.PIC} alt={item.NAME} className='img'/>
        </div>
        <div>
          <h1>{item.NAME}</h1>
          <p>Price Rs:{item.AMT}</p>
          <button className='delete' onClick={()=>handleDelete(item.ID)}>Delete</button>
        </div>
        </div>
        ))}

        <div className='total-con'>
          <h3>Total Amout: RS {totalValue}</h3>
        </div>

    </div>
  )
}
