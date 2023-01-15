import Slider from 'react-slick';
import { CustomersLogo } from '../../logic/instructions';
const CustomersCard = CustomersLogo.map((i,id)=>
    <>
    <div key={id}   className={`inline-block mx-2 lg:mx-4 ${id==0 && "first"}`}>
        <div  className="flex items-center justify-center w-32 h-12 bg-white rounded-lg md:w-40 md:h-16 secondary-shadow overflow-hidden px-4 py-2">
            <div  className="img w-32 h-11 md:w-40 md:h-14" style={{backgroundImage: `url(${i})`}}>
                </div></div></div>
    </>

)
export const CustomerLoveUs = () => {
   
  return (
    <div className='relative flex items-center h-16 channel-banner'>
    {CustomersCard}
   
   </div>

    
   
  );
}