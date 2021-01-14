import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    
    //const [state, dispatch] = useStateValue();
    const [{ basket, user }, dispatch] = useStateValue(); 

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    };

    return (
        <div className='header'>
            <Link to="/">
                <img className='header_logo' src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" alt=""/>
            </Link>
            <div className='header_search'>
                <input className='header_search_input' type="text" />
                <SearchIcon className='header_search_icon'/>
            </div>

            <div className='header_nav'>
                
                    <div className='header_nav_option'>
                        <span className='header_nav_option_lineOne'>Hello {user ? user?.email: 'Guest'}</span>
                        {/* <span className='header_nav_option_lineTwo'>Sign In</span>  */}
                        <Link to={!user && '/login'}>
                            <span onClick={handleAuthentication} className='header_nav_option_lineTwo'>
                                {user ? 'Sign Out': 'Sign In'}
                            </span> 
                        </Link>
                    </div>
                
                    <Link to='/orders'>
                        <div className='header_nav_option'>
                            <span className='header_nav_option_lineOne'>Returns</span>
                            <span className='header_nav_option_lineTwo'>& Orders</span>
                        </div>
                    </Link>
                

                <div className='header_nav_option'>
                    <span className='header_nav_option_lineOne'>Your</span>
                    <span className='header_nav_option_lineTwo'>Prime</span>
                </div>
                
                <Link to="/checkout">
                    <div className='header_option_basket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header_nav_option_lineTwo header_option_basket_count'>{basket?.length}</span>
                    </div>
                </Link>

            </div>
            
        </div>
    )
}

export default Header;
