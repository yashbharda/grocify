import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgseaFood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
        <CategoryPage title="Meat & SeaFood " BgImage={BgseaFood} categories={['Meat', 'SeaFood']} />
    </div>
  )
}

export default SeaFood