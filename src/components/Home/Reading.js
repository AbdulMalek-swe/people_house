import React from 'react';
import img2 from '../../Assets/Photos/Video Marketing.png'
import Carousel from 'react-multi-carousel';
const Reading = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }; 
    return (
        <div className='container-ml mb-[170px]' id='reading'>
        <div>
            <div>
                <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Reading</h1>
                <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'>Our clients have recomended</p>
            </div>
            <div>

            </div>
              <div 
               className='arrow_no_margin  '>
              <Carousel responsive={responsive}  
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  infinite={true}
                  partialVisible={true}
                  containerClass="arrow_no_margin  flatdot  py-10 lg:py-20 "
                  dotListclassName="custom-dot-list-style"
 
               >
                {
                 [1,2,2,2,22,].map(item=>  <div  >
                     <div className='pl-[40px] pr-[13px] mx-2  shadow-lg shadow-offset-x  h-[270px]  shadow-offset-y shadow-blur shadow-color reading-card'>
                         <div className='flex items-center pt-[37px] mb-[35px]'>
                             <div  >  <img src={img2} alt='' height="50px" width="50px" /></div>
                             <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Today’s Article</p>
                         </div>
                         <div className='pb-[41px]'>
                             <span className='text-[20px] font-normal'>Set-top boxes and embedded software for the broadcasting market, including DVB, OTT, and IPTV solutions. </span>
                         </div>
                     </div>
                 </div>)
                }
                  </Carousel>
              </div>
            
        </div>
    </div>
    );
};

export default Reading;