
import { Container } from "react-bootstrap";
import { PrimaryText } from "../../Components/PrimaryText";

export default function HeroBottomSection(){

    
    return(<>
            <div className="hero-section xl:top-8 lg:top-16 hidden md:block">
             
                   <p className=" xl:pt-16 pt-8 md:px-16 lg:px-32 xl:px-72  md:text-4xl text-xl font-semibold md:text-center text-black">
                   While you focus on products, we will guarantee the
                   <PrimaryText text={"best-in-class"} />
                   fulfilment experience
                   </p>
                
            </div>
      </>
    )


}