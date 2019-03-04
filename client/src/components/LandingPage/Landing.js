import React from 'react';

import Header from './Header/';
import Feature from './Feature/';
import Footer from './Footer/';
import LoginModal from '../Modal/LoginModal';

const Landing = () => {
    return (
        <div>
            <Header />
            <Feature />
            <Footer />
            <LoginModal />
        </div>
    )
};

export default Landing;