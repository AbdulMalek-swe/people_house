import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Assets/Photos/brain.png'
import { FaUserCircle } from 'react-icons/fa';
import vector from '../../Assets/Photos/Vector (2).png'
import { Link, useLocation } from 'react-router-dom';

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

    const { pathname } = useLocation();

    return (
        <div className='  pb-[60px]' id='blog'>
            <div className='container-ml'>
                <div className='pt-[10px] text-primary'>
                    <h1 className='  text-[40px] px-3 border-l-[5px] border-primary h-[60px] my-[48px]'>The Peoples Voice</h1>

                </div>
                {pathname == "/blog" ? <div> <BlogAll />  </div> : <div
                    className='arrow_no_margin  '>
                    <Carousel responsive={responsive}   >
                        {[1, 2, 34, 5, 6, 4].map(item => <div className='bg-white pt-[75px] px-[30px] pb-[35px] rounded-[10px] border'>
                            <div className='grid grid-cols-4 gap-4'>
                                <div>
                                    <p className="mb-[26px]">
                                        <FaUserCircle size={48} />
                                    </p>
                                    <img alt='' src={vector} />
                                    <p className='text-[15px] mb-[15px]'>MD: Sazzadul Alam Sajib</p>
                                    <p className='text-[15px]  '> Chief Designer<br />
                                        Visionary Technology<br />
                                        Bangladesh</p>

                                </div>
                                <div className='col-span-2'>
                                    <h1 className='text-[30px] text-black mb-[38px]'>A Serious Discussion</h1>
                                    <p className='text-[20px] '>Hardware and software solutions for the manufacturers of systems for industrial automation, robots, power engineering, and motor control.</p>
                                    <p className='text-[20px] text-[#00000096] font-normal mt-10'>Hardware and software solutions for the manufacturers of systems for industrial automation, robots, power engineering, and motor control.</p>
                                </div>
                                <div className="card w-[208px] bg-base-100 shadow-xl image-full h-[283px]">
                                    <figure className='w-[208px] h-[283px]'><img src={img} alt="Shoes" width="100%" className='w-full h-[283px]' height="283px" /></figure>
                                    <div className="   flex flex-col items-center justify-center text-[#FFFFFF]">

                                        <p className='text-[#FFFFFF] z-10 text-center text-[20px]'>Here will be <br /> a image <br /> about the <br /> discussion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}

                    </Carousel>
                </div>
                }
            </div>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 mt-7 container-ml '>
                {
                    //   data.slice(0,sliceNumber).map(item => <BlogAll  />)
                }

            </div>
            <div className='text-center mb-7 mt-7 text-white'>
                {
                    // toggler && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button>
                }
            </div>
        </div>
    );
};

export default Blog;


// reading card design here 
export const BlogAll = () => {
    const data = [2, 3];
    return (
        <div className='  rounded'>

            <div className='grid md:grid-cols-4 place-content-center   justify-center gap-4 '>
                <div className='mx-auto '>
                    <div>
                        <h1 className='text-3xl mb-3'>Top Stories</h1>
                        <div className='border mb-6'></div>
                    </div>
                    {


                        data.map(item => <div>
                            <img src={img} alt='loading' className='h-24 w-full' />
                            <h1 className='my-4 text-2xl'>header field when come backend it work</h1>
                            <p className='mb-5'>some text here i represent in the field so i have no choice i rest the api</p>
                        </div>)
                    }
                </div>
                <div className='mx-auto col-span-2'>
                    <div>
                        <img src={img} alt='loading' className=' w-full' />
                        <h1 className='my-4 text-2xl'>header field when come backend it work</h1>
                        <p className='mb-5'>some text here i represent in the field so i have no choice i rest the api</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div>
                        <h1 className='text-3xl mb-3'>Recent Stories</h1>
                        <div className='border mb-10'></div>
                    </div>
                    {
                        data.map(item => <div>
                            <div className='flex items-center'>
                                <div>
                                    <img src={img} alt='loading' className='h-10 w-10 rounded-full' />
                                </div>
                                <div>
                                    <span className='mx-3 block'>Admin</span>
                                    <span className='mx-3 block'>May 30</span>
                                </div>
                            </div>
                            <h1 className='my-4 text-2xl'>header field when come backend it work</h1>
                            <p className='mb-5'>some text here i represent in the field so i have no choice i rest the api</p>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-10 grid md:grid-cols-3 grid-cols-1 gap-4 gap-y-10'>
                {[1,  3, 4].map(item => <BlogCard />)}
            </div>
        </div>
    );
};

export const BlogCard = () => {
    return (
        <>
            <div>
                <img src={img} alt='loading' className='h-40 w-full' />
                <h1 className='my-4 text-2xl'>header field when come backend it work</h1>
                <p className='mb-5'>some text here i represent in the field so i have no choice i rest the api</p>
                <div className='mt-5'>
                    <Link to="/blog/1" className='shadow-lg px-7 py-4 rounded hover:underline'>
                        See More
                    </Link>
                </div>
            </div>
        </>
    );
};

export const BlogDetails = () => {
    return (
        <div className='text-center container-ml my-7'>
            <div className='flex items-center justify-center' >
                <div>
                    <h1 className='my-5'>header of the news</h1>
                    <img src='' alt='loaded the imgs' className='my-5' />
                    <p>
                        We, the members of this community, pledge to honor and protect the sacrifices made by our military heroes who shed their blood to secure our freedom and ensure the future of our nation. We recognize that their sacrifices were hard-won and the stories lying beneath the headstones at Arlington Cemetery and other military cemeteries across the country are the seeds of freedom that must be protected at all costs.
                    </p>
                </div>
            </div>
        </div>
    );
};