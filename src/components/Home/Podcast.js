import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation()

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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
  const data = [2, 3, 4, 5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 5, 6, 5, 6, 5, 6, 3, 2, 1, 2, 3, 4, 3];
  const [toggler, setTogller] = useState(true)
  const [sliceNumber, setSliceNumber] = useState(10);
  const addSlice = e => {
    if (data.length < sliceNumber) {
      setTogller(false)
    }
    else {
      setSliceNumber(sliceNumber + 10)
    }

  }
  return (
    <div >
      <div className='container-ml mb-6' id='podcast'>
        <div>
          <div>
            <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Podcast</h1>
            <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> Here we speak for ourselves</p>
            {pathname == '/podcast' ? <></> : <div className='flex justify-between'>
              <span className='px-3 text-[30px] mb-5'>For You</span>
              <span className='text-[20px] mb-6'>See All</span>
            </div>}
          </div>
          <div>

          </div>
          {
            pathname == '/podcast' ? <></> :
              <div
                className='arrow_no_margin  '>
                <Carousel
                  itemClass=" "
                  responsive={responsive}   >
                  {
                    [img1, img2, img3, img4, img1,].map(item => <div   >
                      <div className='mx-3 ' >
                        <img src={`${item}`} alt="loading" width="100%" height="300px" className='h-[300px]' />
                      </div>
                    </div>)
                  }
                </Carousel>
              </div>
          }
        </div>
        <div className='mt-7   '>
          {
            pathname === '/podcast' && data.slice(0, sliceNumber).map(item => <PodcastAll />)
          }

        </div>
        <div className='text-center mb-7 mt-7 text-white'>
          {
            pathname === '/podcast' && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button>
          }

        </div>
      </div>
    </div>
  );
};

export default Podcast;


// reading card design here 
export const PodcastAll = () => {
  return (
    <div className='p-4   rounded shadow-md'>
      <div className='flex items-center  '>
        <div className='  w-1/6'>
          <img src={img1} className='rounded-full w-full' alt='loading' />
        </div>
        <div className='mb-3'>
          <h1 className='pt-7 mb-2'>Header</h1>
          <p>
            Lorem ipsum is my favourite text so i alltime use it
          </p>
          <Link to="/reading/1">
            <button className=' hover:underline hover:text-primary   py-3 rounded text-black my-5'>Read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};