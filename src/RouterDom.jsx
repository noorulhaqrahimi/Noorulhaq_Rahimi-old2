import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Products from "./components/products/Products"
import Contact from "./components/contact/Contact"
import NotFound from "./NotFound";



const RouterDom = () => {
    return <>
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/Services" element={<Services />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
}

export default RouterDom;