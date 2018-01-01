import React, { Component } from 'react';
import Header from './Base/Header.js';
import Footer from './Base/Footer.js';
import Main from './Base/Main.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hero: [
                {
                    id: 1,
                    heading: 'Welcome to my Place',
                    text: 'This is where I have all my portfolio stuff'
                },
                {
                    id: 2,
                    heading: 'About me',
                    text: 'This is where I have all my portfolio stuff'
                },
                {
                    id: 3,
                    heading: 'Stuff I´ve done',
                    text: 'This is where I have all my portfolio stuff'
                },
                {
                    id: 4,
                    heading: 'Contact',
                    text: 'This is where I have all my portfolio stuff'
                },
                {
                    id: 5,
                    heading: 'Blog',
                    text: 'This is where I have all my portfolio stuff'
                }
            ],
            heroNumber: 0,
        }

        this.changeHero = this.changeHero.bind(this);
    }

    changeHero(number) {
        this.setState({
            heroNumber: number
        });
    }

    render() {
        var status = this.state;

        return (
            <div className="App">
                <Header changeHero={this.changeHero} heroNumber={status.heroNumber}></Header>
                <section className="section hero">
                    <div className="container">
                        <h1>{status.hero[status.heroNumber].heading}</h1>
                        <p>
                        {status.hero[status.heroNumber].text}
                        </p>
                    </div>
                </section>
                <Main />
                <Footer changeHero={this.changeHero} heroNumber={status.heroNumber}></Footer>
            </div>
        );
    }
}

export default App;
