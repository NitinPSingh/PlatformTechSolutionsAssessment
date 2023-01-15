import Slider from 'react-slick';
import { TestimonialInfo } from '../../logic/instructions';
const TestimonialCard = TestimonialInfo.map((info,i)=>
<div key={i} className="w-100 inline-block">
    <div className='flex flex-col flex-1 mx-4 overflow-hidden bg-white secondary-shadow rounded-2xl'>
        <div className='px-4 pt-6 mb-2 text-lg text-gray-800 md:px-6 lg:text-left'>
        <p><strong>"{info.Heading}"</strong></p>
        </div>
       
            <div className="flex items-center justify-center px-4 pb-6 text-sm text-gray-600 md:px-6 lg:text-left lg:items-start lg:justify-start h-[171px]" >
                <p>{info.Text1}
                    <strong>{info.Bold}</strong> {info.Text2}</p>
            </div> 
            <div className="flex items-center justify-between w-full h-24 px-4 py-2 border border-t-0 md:p-6 rounded-b-2xl border-primary lg:h-20 avatar-section">
                <div className="flex items-center">
                    <div className="hidden w-12 h-12 p-1 mr-4 overflow-hidden rounded-full lg:flex">
                    <img src="https://blowhorncms.s3.us-east-2.amazonaws.com/Testimonial_b6375e69f0.png" width="64" height="64" alt="Avatar" loading="lazy" />
                        </div> 
                        <div >
                            <p class="text-base text-gray-900 m-[0px]">
          {info.Name}
        </p> <p  class="text-gray-500 m-[0px]">
          {info.Role}
        </p></div></div> <div  className="company-logo">
            <img  src={info.img} alt="customer logo" loading="lazy" />
                </div>
                
                </div>
        
    </div>
    
  

</div>)

function TestimonialCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        
      };
  return (
    <div className='container relative px-4 pb-16 mx-auto max-w-[1024px]'>
    <div  class="flex justify-between">
      <h2  class="mb-2 text-2xl leading-tight text-gray-900 md:pb-5 md:text-4xl">Testimonials</h2>
      </div>
    <Slider {...settings}>
    
   {TestimonialCard }
   </Slider>
  </div>
    
   
  );
}

export default TestimonialCarousel;