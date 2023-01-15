import svg from "../../assests/images/blueArrow.svg"
import { instructions } from "../../logic/instructions"
import svg2 from "../../assests/images/endArrow.svg"
export const StatusBar = ({perc}) =>{

    console.log(perc)
    return (
    <>
    <div className="lg:flex justify-center overflow-x-hidden overflow-y-hidden">
            <div className="start-line bg-[#00d2f5] h-[2px] w-full mt-[40px]" />
            <div className="w-[21px] h-[54px]">
                <img className="transform rotate-180 !h-[83px] !right-[9px] !relative" src={svg} />
                
            </div>       
                                  
            <div className="flex rounded-lg lg:w-10/12 leading-[25px] py-[1rem] min-w-[83%] justify-around text-center " style={{backgroundImage: `linear-gradient(to right,rgb(0, 210, 246) 0%, rgb(0, 210, 246) ${perc}%, rgb(229, 250, 254) ${perc}%, rgb(229, 250, 254))`}}>
                {instructions.steps.map((i)=>                   
                <div className="status text-base font-medium w-44">{i.topic}
                    </div>
                
                )}

            </div>
            <div className="w-[21px] h-[54px]">
                <img className="!h-[83px] !right-[-9px] !relative" src={svg2} />
                
            </div>  
            
            <div className="end-line bg-[#00d2f5] h-[2px] w-full mt-[40px]" />

         

    </div>
    
    </>)
}