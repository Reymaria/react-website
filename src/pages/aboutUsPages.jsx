import React from "react";
import AboutTeam from "../components/aboutUs/aboutTeam";
import AUsPage from "../components/aboutUs/aboutUs";
import DarkFooterBottom from "../components/landingPage/FooterBottom1";
import NavigationBar from "../components/landingPage/NavigationBar";
const AUPage = () => {
    return (
        <div>
            <NavigationBar/>
            < AUsPage/>
            <AboutTeam/>
            <DarkFooterBottom/>
        </div>
    );
};

export default AUPage;