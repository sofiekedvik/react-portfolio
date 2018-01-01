import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {

        return (
            <nav>
                <ul className="ul">
                    <li onClick={(e) => this.props.changeHero(0)} className={this.props.heroNumber === 0 ? 'active' : ''}>
                        <Link to="/">Start</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(1)} className={this.props.heroNumber === 1 ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(2)} className={this.props.heroNumber === 2 ? 'active' : ''}>
                        <Link to="/things">Things</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(3)} className={this.props.heroNumber === 3 ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(4)} className={this.props.heroNumber === 4 ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
