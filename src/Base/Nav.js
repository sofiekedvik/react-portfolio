import React, { Component } from 'react';

class Nav extends Component {
    render() {

        return (
            <nav>
                <ul className="ul">
                    <li>
                        <a href="#start" onClick={(e) => this.props.changeHero(0)} className={this.props.heroNumber === 0 ? 'active' : ''}>Start</a>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => this.props.changeHero(1)} className={this.props.heroNumber === 1 ? 'active' : ''}>About</a>
                    </li>
                    <li>
                        <a href="#things" onClick={(e) => this.props.changeHero(2)} className={this.props.heroNumber === 2 ? 'active' : ''}>Things</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => this.props.changeHero(3)} className={this.props.heroNumber === 3 ? 'active' : ''}>Contact</a>
                    </li>
                    <li>
                        <a href="#blog" onClick={(e) => this.props.changeHero(4)} className={this.props.heroNumber === 4 ? 'active' : ''}>Blog</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
