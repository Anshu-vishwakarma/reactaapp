import React from 'react'
import Header from './Header';
import Menu from './Menu';
import { Switch,Route } from 'react-router-dom';
import Checkout from './Checkout';

const App = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/checkout" component={Checkout}/>
        </Switch>
        </>
    )
}

export default App;
