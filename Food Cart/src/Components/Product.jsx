import { useContext } from 'react'
import './Product.css'
import { GreantContext } from '../App'

export const Product = ({item}) => {
  const[Cart,setCart]=useContext(GreantContext)

const addCart=()=>{
  setCart([...Cart,item])
}
const removeCart=()=>{
setCart(Cart.filter((cartitem)=>cartitem.ID!==item.ID))
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


    </div>
  )
}
