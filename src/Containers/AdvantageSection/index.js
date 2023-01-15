import Svg from "../../assests/images/GetStarted.svg"
import { AdvantageGridComponent } from "../../Components/AdvantageGridComponent"
import { PrimaryText } from "../../Components/PrimaryText"
import { AdvantageInfo } from "../../logic/instructions"
export const AdvantageSection = () => {

    return (
        <div className="px-4 md:px-8 xl:pt-11 md:pt-8 pt-6 bg-white">
        <div className="md:flex ">
        <div className="hidden md:block secondary-shadow shadow-lg rounded-lg leftBigCard w-[40rem] ml-[2rem] mt-[1.5rem] mb-[2.5rem]">
        <p className="xl:px-12 lg:px-6 md:px-3 xl:text-4xl md:text-3xl text-xl font-semibold pt-5">
        Grow your brand with the
        <span className="text-primary">largest</span> same day delivery platform
      </p> <div  className="pt-5 w-max xl:ml-9 lg:ml-4 md:pl-3">
        <a href="" className="flex items-center px-4 py-3 text-sm font-semibold text-gray-900 bg-primary rounded-full">
            <span className="text-xl font-semibold text-white">Get Started</span></a></div> 
            <img src={Svg} alt="card background image" className="w-full"/>
            </div>

            <AdvantageGridComponent />
        </div>
        
        
        </div >
    )
}