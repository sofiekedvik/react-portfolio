import React, { Component } from 'react';
import Nav from './Nav.js';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <h2 className="header__logo">Soof</h2>
                    <Nav changeHero={this.props.changeHero} heroNumber={this.props.heroNumber}/>
                </div>
            </header>
        );
    }
}

export default Header;
