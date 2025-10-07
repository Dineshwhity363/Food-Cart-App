import { useContext, useState } from 'react'
import './Product.css'
import { GreantContext } from '../App'

export const Product = ({item}) => {
  const[Cart,setCart]=useContext(GreantContext)
  const[copied,setCopied]=useState(false)
  const couponCode="FOOD31"

const addCart=()=>{
  setCart([...Cart,item])
}
const removeCart=()=>{
setCart(Cart.filter((cartitem)=>cartitem.ID!==item.ID))
}
const clickMe=()=>{
  navigator.clipboard.writeText(couponCode)
  setCopied(true)
  setTimeout(()=>setCopied(false),5000)
}

  return (
    <div className="product-card">
        <div className="img-con">
            <img src={item.PIC} alt={item.NAME} className='img'/>
        </div>
        <div className='item-details'>
            <h1 className='title'>{item.NAME}</h1>
            <p className='price'>Price Rs: {item.AMT}</p>
            {Cart.some((cartitem)=>cartitem.ID === item.ID)?(<button className='remove-but' onClick={removeCart}>Remove Cart</button>):(<button className='item-but' onClick={addCart}>Add Cart</button>)}
        </div>
        <div >
          <button className=' code text-info'  onClick={clickMe} > CoupenCode : {couponCode} <span className='span'>{copied ? "copied!" : ""}</span>
            
          </button>
        </div>


    </div>
  )
}
