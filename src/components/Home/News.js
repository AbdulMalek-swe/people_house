import React from 'react';
import img from '../../Assets/Photos/Video Marketing.png';
import img1 from '../../Assets/Photos/Telecom.png';
import img2 from '../../Assets/Photos/Vector (1).png'
const News = () => {
    return (
        <div className='container-ml mb-[170px]' id='news'>
            <div>
                <div>
                    <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>News</h1>
                    <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> Content</p>
                </div>
                 
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
                    <div  >
                        <div className='h-[300px]  pl-[40px] pr-[13px] border border-[#001AFF] border-solid shadow-lg shadow-offset-x shadow-offset-y shadow-blur shadow-color'>
                            <div className='flex items-center pt-[37px] mb-[35px]'>
                                <div  >  <img src={img} alt='' height="50px" width="50px" /></div>
                                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Video Streaming</p>
                            </div>
                            <div className='pb-[41px]'>
                                <span className='text-[20px] font-normal'>Set-top boxes and embedded software for the broadcasting market, including DVB, OTT, and IPTV solutions. </span>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='h-[300px]  pl-[40px] pr-[13px]   shadow-lg shadow-offset-x shadow-offset-y shadow-blur shadow-color'>
                            <div className='flex items-center pt-[37px] mb-[35px]'>
                                <div  >  <img src={img1} alt='' height="50px" width="50px" /></div>
                                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Telecom</p>
                            </div>
                            <div className='pb-[41px]'>
                                <span className='text-[20px] font-normal'>Cutting-edge and cost-effective network equipment: CPE, routers, gateways, networking adapters, thin clients. </span>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='pl-[40px] pr-[13px]   shadow-lg shadow-offset-x  h-[300px]  shadow-offset-y shadow-blur shadow-color'>
                            <div className='flex items-center pt-[37px] mb-[35px]'>
                                <div  >  <img src={img2} alt='' height="50px" width="50px" /></div>
                                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>Automotive</p>
                            </div>
                            <div className='pb-[41px]'>
                                <span className='text-[20px] font-normal'>Eco-friendly solutions for electric vehicles, IVI, fault-tolerant hardware and software platforms for ADAS.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;