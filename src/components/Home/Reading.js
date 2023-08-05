import React, { useEffect, useState } from 'react';
import img2 from '../../Assets/Photos/Video Marketing.png'
import Carousel from 'react-multi-carousel';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from '../../apiService/axios';
import { FaShare } from 'react-icons/fa';
import ModelShare from '../shareModel/ModelShare';

const Reading = () => {
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
    const [reading,setReading] = useState([])
    const [filters,setFilters] = useState([]);
    async function getReading(){
        axios.get("/recommended-readings/")
        .then(res=>{
           console.log(res.data,"ok blog");
           setReading(res.data)
           setFilters(res.data)
        })  
    }
    useEffect(()=>{
      getReading()
  
    },[])
    const handleReading = items =>{
        const s = filters.filter(item=> {
            console.log(item.type.toLowerCase() ==items);
           return item.type.toLowerCase() ==items
        })
       
            setReading(s)
         
        
       
       
    } 
    return (
        <div className='container-ml mb-[10px]' id='reading'>
            <div>
                <div>
                    <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Reading</h1>
                    <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'>Our clients have recomended</p>


                </div>

                {pathname === '/reading' && <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-1 gap-x-1 '>
                    <button className="bg-red text-white font-medium py-2 px-5 flex items-center rounded-md gap-6   text-center justify-center my-2 shadow-lg hover:bg-primary" onClick={()=>handleReading('book')}>
                        <span>Book</span>
                    </button>
                    <button className="bg-white text-black font-medium py-2 px-5 flex items-center rounded-md gap-6  text-center justify-center my-2  shadow-lg hover:bg-red hover:text-white " onClick={()=>handleReading('video')}>
                        <span>Video </span>
                    </button>
                    <button className="bg-primary text-white font-medium py-2 px-5 flex items-center rounded-md gap-6  text-center justify-center my-2 shadow-lg hover:bg-red" onClick={()=>handleReading('article')}>
                        <span>Article</span>
                    </button>
                </div>}
                <div
                    className='arrow_no_margin  '>
                    {
                        pathname === '/reading' ? <div></div> :
                            <Carousel responsive={responsive}
                                autoPlay={true}
                                autoPlaySpeed={5000}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                infinite={true}
                                partialVisible={true}
                                containerclassName="arrow_no_margin  flatdot  py-10 lg:py-20 "
                                dotListclassName="custom-dot-list-style"

                            >
                                {
                                    ['book', 'video', 'article'].map((item,index) => <div  key={index}>
                                        <div className='pl-[40px] pr-[13px] mx-2  shadow-sm   h-[320px]      '>
                                            <div className='flex items-center pt-[37px] mb-[35px]'>
                                                <div  >  <img src={img2} alt='' height="50px" width="50px" /></div>
                                                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'>{item}</p>
                                            </div>
                                            <div className='pb-[41px]'>
                                                <span className='text-[20px] font-normal'>Set-top boxes and embedded software for the broadcasting market, including DVB, OTT, and IPTV solutions. </span>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </Carousel>
                    }
                </div>

            </div>
            <div className='mt-7 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 '>
                {
                    pathname === '/reading' && reading.slice(0, sliceNumber).map(item => <ReadingAll item={item} key={item.ReadingAll}/>)
                }

            </div>
            <div className='text-center mb-7 mt-7 text-white'>
                {
                    pathname === '/reading' && <button className='bg-primary px-5 py-3 rounded ' onClick={addSlice}>See More</button>
                }

            </div>
        </div>
    );
};

export default Reading;

// reading card design here 
export const ReadingAll = ({item}) => {
    return (
        <div className='pl-[40px] pr-[13px]   rounded shadow-md'>
            <div className='flex items-center pt-[37px] mb-[35px]'>
                <div  >  <img src={item?.image} alt='' height="50px" width="50px" /></div>
                <p className='text-dark text-[20px] py-[2px] mx-8  mb-[-15px]'> {item?.title}</p>
            </div>
            <div className='pb-[41px]'>
                <span className='text-[20px] font-normal whitespace-normal break-words'> {item?.description.slice(0,200)} </span>
            </div>
            <Link to={`/reading/${item.id}`}>
                <button className='bg-primary px-5 py-3 rounded text-white my-5'>Details</button>
            </Link>

        </div>
    );
};

//  details of every reading 
export const ReadingDetails = () => {
    const datas =window.location.href;
    const [blog, setBlog] = useState({});
    const {id} = useParams()
   
    useEffect(() => {
        async function blogFunction() {
            try {
                axios.get(`/recommended-readings/${id}/`)
                    .then(res => {
                        console.log(res.data, "ok blog");
                        setBlog(res.data)
                    })
            } catch (error) {
    
            }
        }
        blogFunction()
    }, [id])
    return (
        <div className='text-center container-ml my-7'>
            <div className='flex items-center justify-center' >
                <div>
                    <h1 className='my-5'>{blog.title}</h1>
                   <div className='flex justify-center items-center'>
                   <img src={blog.image} alt='loaded the imgs' className='my-5 w-72 h-52'  />
                   </div>
                    <p>

                       {blog.description}

                    </p>
                    <div className='flex justify-end mx-1 items-center text-black mt-5'>
                        <span className='text-base '>
                              
                            <ModelShare data={datas} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
