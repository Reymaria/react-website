import React from "react";
import AboutUsPage from "./components/aboutUs/aboutUs";
import FooterBottom1 from "./components/landingPage/FooterBottom1";
import NavigationBar from "./components/landingPage/NavigationBar";

const AUPage = () => {
    return (
        <div>
            <NavigationBar/>
            < AboutUsPage />
            <FooterBottom1/>
        </div>
    );
};

export default AUPage;