import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Assets/Photos/brain.png'
import { FaUserCircle} from 'react-icons/fa';
import vector from '../../Assets/Photos/Vector (2).png'
import { Link } from 'react-router-dom';
 
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
    const data =  [2,3,4,5,5,5,5,5,5,1,2,3,4,5,6,5,6,5,6,3,2,1,2,3,4,3];
    const [toggler,setTogller] = useState(true)
    const [sliceNumber,setSliceNumber] = useState(10);
    const addSlice = e =>{
        if(data.length<sliceNumber){
            setTogller(false)
        }
        else{
            setSliceNumber(sliceNumber+10)
        }
      
    }
    return (
        <div className='  pb-[60px]' id='blog'>
            <div className='container-ml'>
                <div className='pt-[10px] text-primary'>
                    <h1 className='  text-[40px] px-3 border-l-[5px] border-primary h-[60px] my-[48px]'>The Peoples Voice</h1>
                  
                </div>
                <div 
               className='arrow_no_margin  '>
                    <Carousel responsive={responsive}   >
                        {[1, 2, 34, 5, 6, 4].map(item => <div className='bg-white pt-[75px] px-[30px] pb-[35px] rounded-[10px] border'>
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
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 mt-7 container-ml '>
               { 
              data.slice(0,sliceNumber).map(item => <BlogAll  />)
               }
              
            </div>
           <div className='text-center mb-7 mt-7 text-white'>
            {
                toggler && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button>
            }
            </div>
        </div>
    );
};

export default Blog;


// reading card design here 
export const BlogAll = () => {
    return (
               <div className='pl-[40px] pr-[13px] mx-2    border-[.5px] border-primary rounded'>
                <div className='flex items-center pt-[37px] mb-[35px]'>
                    <div  >  <img src={img} alt='' height="50px" width="50px" /></div>
                    <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Today’s Article</p>
                </div>
                <div className='pb-[41px]'>
                    <span className='text-[20px] font-normal'>Set-top boxes and embedded software for the broadcasting market, including DVB, OTT, and IPTV solutions. </span>
                </div>
                <Link to="/blog/1">
                <button className='bg-primary px-5 py-3 rounded text-white my-5'>Details</button>
                </Link>
               
            </div>
    );
};

 
export const BlogDetails  = () => {
    return (
        <div className='text-center container-ml my-7'>
           <div className='flex items-center justify-center' >
            <div>
              <h1 className='my-5'>header of the news</h1>
               <img src='' alt='loaded the imgs' className='my-5'/>
               <p>
                 
               We, the members of this community, pledge to honor and protect the sacrifices made by our military heroes who shed their blood to secure our freedom and ensure the future of our nation. We recognize that their sacrifices were hard-won and the stories lying beneath the headstones at Arlington Cemetery and other military cemeteries across the country are the seeds of freedom that must be protected at all costs.

               </p>
            </div>
           </div>
        </div>
    );
};