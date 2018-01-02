import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';

class Main extends Component {
    render() {
        return (
            <main className="section">
                <Switch>
                    <Route exact path='/' render={(props) => (
                        <Home hero={this.props.hero}/> )} />
                    <Route path='/about' render={(props) => (
                        <About hero={this.props.hero}/> )} />
                </Switch>
            </main>
        )
    }
}

export default Main;
