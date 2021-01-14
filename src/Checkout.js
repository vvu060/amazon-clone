import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img15/home/LA/exchange_offers._V278112460_.jpg' alt="" />
                
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    
                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                    
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}

                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout;
