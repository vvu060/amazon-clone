import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({id,title, price, image, rating, hideButton}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className='checkout__product'>
            <img className='checkout__product__image' src={image} alt="" />
                <div className='checkout__product__info'>
                    <p className='checkout__product__title'>{title}</p>
                    
                    <p className='checkout__product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className='checkout__product__rating'>
                        {Array(rating).fill().map((_, i) => (<p>&#11088;</p>))}
                    </div>

                    {!hideButton && (
                        <button onClick={removeFromBasket}>Remove from Basket</button>
                    )}
                    
                </div>
            
        </div>
    )
}

export default CheckoutProduct;
