import React from 'react'

const Item = (props) => {
    return (
        <div className = 'item'>
            <p>{props.name}</p>
            <div className = 'itemPrice'>
                {props.price}
            </div>
        </div>
    )
}

export default Item;