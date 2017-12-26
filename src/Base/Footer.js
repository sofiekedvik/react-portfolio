import React, { Component } from 'react';
import Nav from './Nav.js';

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <p>Sofie kedvik</p>
                <Nav changeHero={this.props.changeHero} heroNumber={this.props.heroNumber}/>
            </footer>
        );
    }
}

export default Footer;
