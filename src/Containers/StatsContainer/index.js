import { PrimaryText } from "../../Components/PrimaryText";
import Img1 from "../../assests/images/bigScreenStats.svg";
import Img2 from "../../assests/images/MobileStat.svg";
export const StatsContainer = () =>{

    return (

        <div>
            <div className="flex justify-center items-center">
            <p  class="lg:text-4xl md:text-3xl text-xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 pt-12">
                How can same day delivery
                <PrimaryText text={" accelerate "} />
                 your brand?
                </p>
            </div>
            <div  class="px-4 md:px-8 lg:pl-16 xl:px-32 pb-9">
                <div  class="pt-10 hidden md:block">
                    <img  src={Img1} alt="Same Day Delivery" className="w-full" />
                        </div> 
                <div class="md:hidden pt-5">
                     <img src={Img2} alt="Honey Comb Design" className="w-full" />
                     </div>
                    </div>
            
        
        
        </div>
    )


}