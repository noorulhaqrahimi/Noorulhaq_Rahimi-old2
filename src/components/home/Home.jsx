import Button from "./Button";
import CardsPCY from "./CardsPCY";
import Home1 from "./Home1";
import ImageSlider from "./ImgSlider";
import InfoDev from "./InfoDev";
import Navebar from "./Navbar";
import ServicesCards from "./ServicesCards";
import SkillCards from "./SkillCards";
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
        <InfoDev/>
        <ServicesCards />
        <WhatssapContact />
        </>
    )
}


export default Home;