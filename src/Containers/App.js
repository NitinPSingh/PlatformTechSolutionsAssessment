
import { StatusBar } from "../Components/StatusBar";
import { AdvantageSection } from "./AdvantageSection";
import { ContactUs } from "./ContactUs";
import { CustomerLoveUs } from "./CustomerLoveUs";
import HeroBottomSection from "./HeroBottomSection";
import HeroSection from "./HeroSection";
import { Topbar } from "./Topbar";
import ProductSection from "./ProductSection";
import { StatsContainer } from "./StatsContainer";
import Testimonial from "./Testimonial";



function App(){
    console.log(<HeroSection />)

    return (
        <>
        <Topbar />
        <HeroSection />
        
       <ProductSection />
       <AdvantageSection />
       
        <StatsContainer />
        <CustomerLoveUs />
        <Testimonial />
        <ContactUs />
        </>
    )
}

export default App;