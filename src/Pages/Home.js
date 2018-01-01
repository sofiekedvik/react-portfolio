import React, { Component } from 'react';

const Home = () => (
    <div className="container">
        <section class="section experience" id="experience">
            <h2>Experience</h2>
            <p>List of skills</p>
            <ul class="list list--skills">
                <li class="list__item u--70">Javascript</li>
                <li class="list__item u--50">React</li>
                <li class="list__item u--30">Angular</li>
                <li class="list__item u--70">jQuery</li>
                <li class="list__item u--80">CSS</li>
                <li class="list__item u--80">SASS</li>
                <li class="list__item u--60">LESS</li>
                <li class="list__item u--40">Stylus</li>
                <li class="list__item u--40">PHP</li>
            </ul>
        </section>
        <section class="section projects" id="projects">
            <h2>Projects</h2>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        project one
                    </div>
                    <div class="col-4">
                        project one
                    </div>
                    <div class="col-4">
                        project one
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default Home;
