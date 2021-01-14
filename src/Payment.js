import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {

    const [{ user, basket }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing , setProcessing] = useState('');
    const [error , setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    // useEffect in this case allows us to charge the customer correct amount.
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer 
        const getClientSectret = async() => {
            const response = await axios({          //axios is used to make requests such as get, post etc.
                method: 'post',
                // stripe expects the currencies in sub units (cents, paise, pents)
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSectret();
    }, [basket]);

    console.log('The secret is: ', clientSecret);

    const handleSubmit = async (event) => {
        //All fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);      // Prevents Buy Now button from clicking multiple times

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,       //Gives the time stamp when the order was created
    
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    };

    const handleChange = event => {
        //Listen for changes in the card element
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket.length} items</Link>)
                </h1>

                <div  className='payment__section'>    
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>

                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>456 React Lane</p>
                        <p>Paris, France</p>
                    </div>

                </div>

                <div  className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery address</h3>
                    </div>

                    <div className='payment__items'>
                        {basket.map(item =>(
                             <CheckoutProduct 
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}/>
                        ))}
                    </div>

                </div>

                <div  className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'> 
                        {/* Stripe Magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale= {2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Proessing</p> : 'Buy Now'}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Payment;
