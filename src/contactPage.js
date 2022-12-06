import React from 'react';
import CPage from './components/contactPage/CPage';
import FooterBottom2 from './components/contactPage/FooterBottom2';
import NavigationBar from './components/landingPage/NavigationBar';

const ContactPage = () => {
    return(
        <div>
            <NavigationBar/>
            <CPage/>
            <FooterBottom2/>
        </div>

    );
};

export default ContactPage;