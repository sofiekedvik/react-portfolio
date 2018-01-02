import React, { Component } from 'react';
import Hero from '../Components/Hero';

class About extends Component {
    render() {
        return (
            <section>
                <Hero hero={this.props.hero[1]} />
                <div className="container">
                    <h2>My story</h2>
                    <div className="row">
                        <div className="col-6">
                            <img src="https://dummyimage.com/600x300/000/fff" />
                        </div>
                        <div className="col-6">
                            <p> ipsum dolor sit amet, consectetur adipisicing elit. Dolorem asperiores, neque odio provident a mollitia voluptatum hic fugit tempora aliquid labore distinctio quas molestias placeat adipisci, est totam voluptas rerum.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;
