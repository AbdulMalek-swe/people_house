import React from 'react';
import Carousel from 'react-multi-carousel';
import img2 from '../../Assets/People House Image & Data/mike.jpg';
import img3 from '../../Assets/People House Image & Data/allmike.jpg';
import img4 from '../../Assets/People House Image & Data/mike1.jpg';
import img1 from '../../Assets/People House Image & Data/mikeprimary.jpg';

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (<button 
        onClick={() => onClick()} 
        style={{
          backgroundColor: 'red', // Change background color to red
          border: 'none', // Remove border
          padding: '10px', // Add padding
          borderRadius: '50%', // Make button circular
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' // Add box shadow
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="white" // Change arrow color to white
          stroke="#000000" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>);
  };
  
const Podcast = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
      <div >
        <div className='container-ml mb-[170px]' id='podcast'>
        <div>
            <div>
                <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Podcast</h1>
                <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> Here we speak for ourselves</p>
                <div className='flex justify-between'>
                    <span className='px-3 text-[30px]'>For You</span>
                    <span  className='text-[20px]'>See All</span>
                </div>
            </div>
            <div>

            </div>
            <div 
               className='arrow_no_margin  '>
              <Carousel 
              itemClass=" "
               responsive={responsive}   >
               {
                [img1,img2,img3,img4,img1,].map(item=>  <div   >
                    <div className=' ' >
                         <img src={`${item}`} alt="loading" width="100%" height="300px" className='h-[300px]'/>
                    </div>
                </div>)
               }
                 </Carousel>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Podcast;