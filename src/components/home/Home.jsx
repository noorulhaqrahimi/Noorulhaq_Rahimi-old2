import Button from "./Button";
import CardsPCY from "./CardsPCY";
import Home1 from "./Home1";
import ImageSlider from "./ImgSlider";
import Navebar from "./Navbar";
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
        </>
    )
}


export default Home;