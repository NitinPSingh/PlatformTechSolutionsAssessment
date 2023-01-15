import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import img from "../../assests/images/hero.png"
import { ProductVideo } from "../../Components/ProductVideo";
import { StatusBar } from "../../Components/StatusBar";
import { instructions,Videos } from "../../logic/instructions";
import HeroBottomSection from "../HeroBottomSection";
import check  from "../../assests/images/check.svg"
export default function ProductSection(){
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      let progressBarHandler = () => {
        
        const heightofmain = document.getElementById("Main").clientHeight - document.getElementById("th").clientHeight  ;
        const totalScroll =document.getElementById("th").getBoundingClientRect().y + 10*16;
        
        const scroll = `${(heightofmain -  totalScroll  )/ heightofmain}`;
  
       
  
        setScroll(scroll);
      };
  
      window.addEventListener("scroll", progressBarHandler);
      return () => window.removeEventListener("scroll", progressBarHandler);
    });

    return(<div className="bg-white">
    <HeroBottomSection />
    <div  className="sticky top-[9rem] w-full h-[120px] bg-white z-[1] hidden lg:block"></div>
    <div className="sticky top-[13.7rem] z-10">
    <StatusBar perc={scroll*100}/>
    </div>
    
    <div>
    <div className="grid grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:pb-16 lg:pt-28  col-span-1 lg:sticky top-56 self-start">
          <div className="frame-image lg:py-4 xl:py-6 pr-6">
        < ProductVideo perc={scroll*100}  />
        </div>
    </div>

        <div  className="xl:px-20 px-4 lg:pb-16 pb-8 lg:pt-14 col-span-1 items-stretch">
          <div id="Main" className="flex flex-col justify-center items-center xl:px-20 lg:px-10 md:px-5">
          <div >
            {instructions.steps.map((i,id)=>
                <>{console.log(i.heading)}
                <div key={id} id={id==4 && "th"} className={id==0 && `pt-[20rem] pb-[10rem]` || id==1 && `pt-[10rem] pb-[25rem]` || id==2 && `pt-[10rem] pb-[10rem]` || id==3 && `pt-[10rem] pb-[20rem]` ||  id==4 && `pt-[10rem] pb-[30rem]`}>
                    <p id={id==4 && "th"} className="md:text-xl text-lg font-bold text-black py-2.5">
                        {i.heading}
                </p> 
                <div  className="flex flex-col space-y-2 py-4">

                    {i.listItem.map((j,id)=>
                    <div key={id}   className="flex items-start m-[0px]">
                        <img  src={check} alt="checkbox" className="pr-2 self-center" /> 
                        <p className="md:text-base text-sm font-medium justify-center text-gray-light m-[0px]">
                    {j}
                </p></div>
                    )}
                </div>
                </div>
                </>     
            )}
           </div>
          </div>
          </div> 
       
    </div>
    </div>
      </div>
    )


}