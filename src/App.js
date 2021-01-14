import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51HdbRJITlxwxRaguwY34ROtdYLAjtgcszq2fHUgl0YIlmRHyTQo9etnR6JcHuBf7lQMQIqnUe0FVv9l1MYmn4Pe000da5NDZ1v');

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will run only once when the app component loads, it also acts as a listner or observer.
    auth.onAuthStateChanged(authUser => {
      console.log('The USER is:', authUser);

      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    })
  },[]);

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/orders">
            <Header />           
            <Orders />
          </Route>

          <Route path="/login">           
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />           
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />           
            <Elements stripe={promise}>
              <Payment />  
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

// for stripe run "npm i @stripe/stripe-js" and "npm i @stripe/react-stripe-js" is terminal