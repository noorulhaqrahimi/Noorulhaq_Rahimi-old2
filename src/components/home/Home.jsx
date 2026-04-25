import Button from "./Button";
import CardsPCY from "./CardsPCY";
import Home1 from "./Home1";
import ImageSlider from "./ImgSlider";
import InfoDev from "./InfoDev";
import Navebar from "./Navbar";
import ServicesCards from "./ServicesCards";
import SkillCards from "./SkillCards";



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
        </>
    )
}


export default Home;