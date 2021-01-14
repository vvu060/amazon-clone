import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/1917/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_en-GB._CB419087828_.jpg' alt='' />

                <div className='home__row'>
                    <Product 
                    id="001"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Windows 10 in S Mode, Silver"
                    price={359.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg"
                    rating={4} />

                    <Product 
                    id="002"
                    title="Philips Sonicare HX9690/05 ExpertClean 7500 Bluetooth Rechargeable Electric Toothbrush, Black"
                    price={139.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/41ewJ6VSJpL._AC_US218_.jpg"
                    rating={4} />
                </div>
                
                <div className='home__row'>
                    <Product 
                    id="003"
                    title="JBL Charge 4 - Waterproof Portable Bluetooth Speaker - Black"
                    price={139.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/711-KB1VppL._AC_SX425_.jpg"
                    rating={5} />

                    <Product 
                    id="004"
                    title="DJI Mavic Air 2 - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse, Gray"
                    price={799.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71PL2FT3URL._AC_SX425_.jpg"
                    rating={5} />

                    <Product 
                    id="005"
                    title="PlayStation 4 Pro 1TB Console with DualShock 4 Wireless Controller Bundle"
                    price={399.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/712VauU3xxL._AC_SX679_.jpg"
                    rating={4} />                             
                </div>

                
                <div className='home__row'>
                    <Product 
                    id="006"
                    title="Sony X950H 85 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
                    price={3798.55}
                    image="https://images-na.ssl-images-amazon.com/images/I/61k5CVI0zYL._AC_SY355_.jpg"
                    rating={5} />

                    <Product 
                    id="007"
                    title="Samsung Electronics UN32N5300AFXZA 32 Inch 1080p Smart LED TV (2018), Black"
                    price={1200.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SX450_.jpg"
                    rating={4} />


                </div>
            
            </div>
            
        </div>
    )
}

export default Home
