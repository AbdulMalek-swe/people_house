import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Assets/Photos/brain.png'
import { FaUserCircle} from 'react-icons/fa';
import vector from '../../Assets/Photos/Vector (2).png'
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group bg-red"> // remember to give it position:absolute
        
      </div>
    );
  };
const Blog = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='bg-red pb-[60px]' id='blog'>
            <div className='container-ml'>
                <div className='pt-[10px] text-white'>
                    <h1 className='  text-[40px] px-3 border-l-[5px] border-[#ffffff] h-[60px] my-[48px]'>Blog</h1>
                    <p className='px-3 text-[#FFFFFFCC] font-500 text-[20px] mb-[35px]'> We share for people</p>
                </div>
                <div 
               className='arrow_no_margin  '>
                    <Carousel responsive={responsive}  customButtonGroup={<ButtonGroup />}>
                        {[1, 2, 34, 5, 6, 4].map(item => <div className='bg-white pt-[75px] px-[30px] pb-[35px] rounded-[10px] '>
                            <div className='grid grid-cols-4 gap-4'>
                                <div>
                                    <p className="mb-[26px]">
                                        <FaUserCircle size={48}/>
                                    </p>
                                     <img alt='' src={vector}/>
                                     <p className='text-[15px] mb-[15px]'>MD: Sazzadul Alam Sajib</p>
                                     <p className='text-[15px]  '> Chief Designer<br/>
Visionary Technology<br/>
Bangladesh</p>
                                      
                                </div>
                                 <div className='col-span-2'>
                                    <h1 className='text-[30px] text-black mb-[38px]'>A Serious Discussion</h1>
                                <p className='text-[20px] '>Hardware and software solutions for the manufacturers of systems for industrial automation, robots, power engineering, and motor control.</p>
                                 <p className='text-[20px] text-[#00000096] font-normal mt-10'>Hardware and software solutions for the manufacturers of systems for industrial automation, robots, power engineering, and motor control.</p>
                                 </div>
                                <div className="card w-[208px] bg-base-100 shadow-xl image-full h-[283px]">
                                    <figure className='w-[208px] h-[283px]'><img src={img} alt="Shoes" width="100%" className='w-full h-[283px]' height="283px"/></figure>
                                    <div className="   flex flex-col items-center justify-center text-[#FFFFFF]">  
                                   
                                    <p className='text-[#FFFFFF] z-10 text-center text-[20px]'>Here will be <br/> a image <br/> about the <br/> discussion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}

                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Blog;