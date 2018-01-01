import React, { Component } from 'react';
import Nav from './Nav.js';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p>Sofie kedvik</p>
                    <Nav changeHero={this.props.changeHero} heroNumber={this.props.heroNumber}
                    navClass="nav--footer"
                    />
                </div>
            </footer>
        );
    }
}

export default Footer;
