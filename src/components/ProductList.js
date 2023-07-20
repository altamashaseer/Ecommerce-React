import React from 'react'
import { useFilterContext } from '../context/FilterContext'

const ProductList = () => {
  const {filter_products, setGridView} = useFilterContext();

  return (
    <div>ProductList</div>
  )
}

export default ProductList