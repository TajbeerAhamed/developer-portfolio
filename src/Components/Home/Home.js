import React from 'react';
import Contact from './ContactMe';
import Feature from './Expertise';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;