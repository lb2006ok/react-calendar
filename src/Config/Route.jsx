import React, {Component} from 'react';
import {Route, BrowserRouter, HashRouter, Switch, Link} from 'react-router-dom';
// import Home from '../Component/content/Home';
import Home1 from '../Component/content/Home1';
import Home2 from '../Component/content/Home2';
const Home = () =>(
        <h1>homepage</h1>
    )
// import Footer from '../Component/common/Footer';
// import Header from '../Component/common/Header';
// import Content from '../Component/Content';

const RouterConfig = (
    <div>
        <Link to="/home1">home</Link>
        <Switch>
            <Route key={1} exact={true} path='/' compontent={Home}/>
            <Route key={2} path='/home1' compontent={Home1}/>
            <Route key={3} path='/home2' compontent={Home2}/>
        </Switch>
    </div>
);
export default RouterConfig;