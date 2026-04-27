import BtnSV from "./BtnSV";
import Button from "./Button";
import CardsPCY from "./CardsPCY";
import Footer from "./Footer";
import Home1 from "./Home1";
import ImageSlider from "./ImgSlider";
import InfoDev from "./InfoDev";
import Navebar from "./Navbar";
import ServicesCards from "./ServicesCards";
import SkillCards from "./SkillCards";
import SkillCardSM from "./SkillCardSM";
import WhatssapContact from "./whatssapContact";


const Home = ()=> {
    return(
        <>
        <Navebar />
        <Home1 />
        <Button />
        <CardsPCY />
        <ImageSlider/>
        <SkillCards />
        <SkillCardSM />
        <InfoDev/>
        <ServicesCards />
        <WhatssapContact />
        <BtnSV />
        <Footer />
        </>
    )
}


export default Home;