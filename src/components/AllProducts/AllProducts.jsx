import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgallProduct from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
       <CategoryPage title="All Products" BgImage={BgallProduct} categories={['All']} />
    </div>
  )
}

export default AllProducts