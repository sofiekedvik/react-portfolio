import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <section className="section hero">
                <div className="container">
                    <h1 className="hero__text">{this.props.hero.heading}</h1>
                    <p className="hero__text">{this.props.hero.text}</p>
                </div>
            </section>
        )
    }
}

export default Hero;
