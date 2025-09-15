import { useState } from 'react';
import './MenuCard.css'
import details from '../assets/Data.json';
import { Product } from './Product';

export const MenuCard = () => {
    const [product]=useState(details.food)
    const[filter,setFilter]=useState("")
    const[sort,setSort]=useState("asc")

    const handleFilter=(e)=>{
      setFilter(e.target.value)
    }


    const filteredProducts=product.filter((item)=>(item.NAME.toLowerCase().includes(filter.toLowerCase())))
    const handleSort=(e)=>{
      setSort(e.target.value)
    }
    const sortedProducts=filteredProducts.sort((A,B)=>{
      if (sort === "asc"){
        return A.NAME.localeCompare(B.NAME)
      } else if(sort === "desc"){
        return B.NAME.localeCompare(A.NAME)
      } else if(sort === "low"){
        return A.AMT-B.AMT
      }else if(sort === "high"){
        return B.AMT - A.AMT
      }
    })
  return (
    
    <div>
      <div className='filter-con'>
        <input type='text' className='input' placeholder='Enter the item by name' onChange={handleFilter} value={filter}/>
       
      
<select value={sort} className='select' onChange={handleSort}>
  <option value="asc">Sort A-Z</option>
  <option value="desc">Sort Z-A</option>
  <option value="low">Sort by Price Low to High</option>
<option value="high">Sort by Price High to Low</option>
 
</select>

      </div>
    <div className='product-con d-flex flex-wrap justify-content-center gap-4'>
        {sortedProducts.map((item)=>(
            <Product key={item.ID} item={item}/>
        )

        )}
    
    </div>
    </div>
    
  )

}
