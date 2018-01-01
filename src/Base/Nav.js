import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {

        var navClass = this.props.navClass ? 'nav ' + this.props.navClass : 'nav';

        return (
            <nav className={navClass}>
                <ul>
                    <li onClick={(e) => this.props.changeHero(0)} className={this.props.heroNumber === 0 ? 'nav__item active' : 'nav__item'}>
                        <Link to="/">Start</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(1)} className={this.props.heroNumber === 1 ? 'nav__item active' : 'nav__item'}>
                        <Link to="/about">About</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(2)} className={this.props.heroNumber === 2 ? 'nav__item active' : 'nav__item'}>
                        <Link to="/things">Things</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(3)} className={this.props.heroNumber === 3 ? 'nav__item active' : 'nav__item'}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li onClick={(e) => this.props.changeHero(4)} className={this.props.heroNumber === 4 ? 'nav__item active' : 'nav__item'}>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
