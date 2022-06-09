import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;