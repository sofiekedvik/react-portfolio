import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';

const Main = () => (
    <main className="section">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
)

export default Main;
