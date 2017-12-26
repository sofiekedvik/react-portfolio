import React, { Component } from 'react';
import Nav from './Nav.js';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Sofie Kedvik</h1>
                <Nav changeHero={this.props.changeHero} heroNumber={this.props.heroNumber}/>
            </header>
        );
    }
}

export default Header;
