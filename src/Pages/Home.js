import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/Hero';

class Home extends Component {
    render() {
        return (
            <section>
                <Hero hero={this.props.hero[0]} />
                <div className="container">
                    <section className="section experience" id="experience">
                        <h2>Skills &amp; Knowledge</h2>
                        <p className="u--light">LESS, SASS, Stylus, React, React Native, Node, Node Express, Angular, Angular 2, JQuery, Nunjucks, Twig, Slim, Pug, Wordpress, Drupal, Swift</p>
                        <ul className="list list--skills">
                            <li className="list__item u--100 u--green">HTML5</li>
                            <li className="list__item u--80 u--turqoise">Javascript</li>
                            <li className="list__item u--90 u--orange">CSS</li>
                            <li className="list__item u--40 u--yellow">PHP</li>
                        </ul>
                    </section>
                    <section className="section projects" id="projects">
                        <h2>Projects</h2>
                        <div className="row">
                            <div className="media col-4">
                                <img src="https://dummyimage.com/400x200/aaa/000" className="media__image"/>
                                <p>lorem ipsum asdasd asdasd asdad asdad as da asda sadad asda asd</p>
                                <Link to="/projects" className="media__link">Read more</Link>
                            </div>
                            <div className="media col-4">
                            <img src="https://dummyimage.com/400x200/aaa/000" className="media__image"/>
                                <p>ipsum dolor sit amet, consectetur adipisicing elit. Dolorem asperiores, neque odio provident a mollitia voluptatum</p>
                                <Link to="/projects" className="media__link">Read more</Link>
                            </div>
                            <div className="media col-4">
                                <img src="https://dummyimage.com/400x200/aaa/000" className="media__image"/>
                                <p>ipsum dolor sit amet, consectetur adipisicing elit. Dolorem asperiores, neque odio provident a mollitia voluptatum</p>
                                <Link to="/projects" className="media__link">Read more</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}

export default Home;
