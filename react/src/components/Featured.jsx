import React from 'react'
import item_data from '../assets/clothing_products.json'

import Item from './Item.jsx'

const Featured = () => {
    return (
        <div className = 'featured'>
            <h1>Featured Products</h1>
            <hr />
            <div className = "featured-item">
                {item_data.map((item, i) => {
                    return <Item key = {i} id={item.id} name={item.name} price ={item.price}/>
                })}
            </div>
        </div>
    )
}

export default Featured;