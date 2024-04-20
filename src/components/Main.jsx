import React from 'react';
import AnyQuestions from './AnyQuestions/AnyQuestions';
import CardsSection from './CardsSection/CardsSection';
import Description from './Description/Description.tsx';
import DetailedInfo from './DetailedInfo/DetailedInfo';
import Facing from './Facing/Facing';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import GetOffer from './GetOffet/GetOffer';
import AboutUs from './MainTextSectionAboutUs/AboutUs';
import Progress from './Progress/Progress';
import StockCottages from './StockCottages/StockCottages';

function Main(props) {
    return (
        <div>
            <Facing />
            <Description />
            <CardsSection />
            <AboutUs />
            <Gallery />
            <StockCottages />
            <DetailedInfo />
            {/* <AnyQuestions /> */}
            <GetOffer />
            <Footer />
            <Progress />
        </div>
    );
}

export default Main;