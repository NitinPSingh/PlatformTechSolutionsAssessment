import { AdvantageInfo } from "../../logic/instructions";
import { PrimaryText } from "../PrimaryText";

export const AdvantageGridComponent = () => 
    <div className="grid grid-cols-2 xl:px-16 lg:px-5 md:pl-7 lg:pb-8 gap-4 lg:pt-5 py-4">
        {AdvantageInfo.map((i)=>
        <div  className="flex justify-center xl:px-2 lg:px-1 lg:my-1 xl:my-4  ">
            <div className="bg-white rounded-xl  p-2 border-[1px] xs:h-60 md:h-[250px] lg:h-[240px] w-[335px]">
                <div className="md:pl-2 pt-3">
                    <img src={i.svg} alt={i.bold} className="flex justify-center items-center" />
                         <div className="lg:text-lg text-base font-semibold pt-2.5">
        {i.bold} 
      </div> 
      <p  className="text-gray-500 text-xs lg:text-sm mt-2 font-normal">
        {i.text}
        <PrimaryText text={i.blue} />
        
        </p></div></div></div>
        
        )}
        </div>
