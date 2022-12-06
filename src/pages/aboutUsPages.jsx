import React from "react";
import AUsPage from "../components/aboutUs/aboutUs";
import DarkFooterBottom from "../components/landingPage/FooterBottom1";
import NavigationBar from "../components/landingPage/NavigationBar";
const AUPage = () => {
    return (
        <div>
            <NavigationBar/>
            < AUsPage/>
            
            <DarkFooterBottom/>
        </div>
    );
};

export default AUPage;