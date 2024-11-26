 import React, { useEffect } from 'react'
import { useState } from 'react';

const ProductList = () => {
    const[products, setProducts ] = useState([]);

    useEffect(()=>{

    },[])

    const getProducts=()=>{
        let result = fetch()
    }
  return (
    <div className=''>
        <h3>ProductList</h3>
    </div>
  )
}

export default ProductList;