import React, { useEffect, useRef, useState } from 'react';
import img from '../../Assets/Photos/countdownflag.png'
import { AiFillSound } from 'react-icons/ai';
import { MdOutlineReadMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import audio from '../../Assets/People House Image & Data/we the people front page.mpeg'
import Invite from './Invite';
import PeopleHousemodal, { PeopleHouseAudio } from '../homeSubComponents/PeopleHouse';
const PeopleHouse = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [year, setYear] = useState(0)
    const [month, setMonth] = useState(0)
    useEffect(() => {
        const compareDate = new Date('2024-11-05');
        compareDate.setDate(compareDate.getDate() + 7);
        //just for this demo today + 7 days

        const timer = setInterval(() => {
            const difference = timeBetweenDates(compareDate);

            if (difference <= 0) {
                clearInterval(timer);
            } else {
                setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
                setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
                setMinutes(Math.floor((difference / 1000 / 60) % 60));
                setSeconds(Math.floor((difference / 1000) % 60));
                //   setYear(Math.floor((days / 365)));
                setYear(Math.floor(difference / (1000 * 60 * 60 * 24 * 365)));
                setMonth(Math.floor((difference / (1000 * 60 * 60 * 24 * 30.44)) % 12));
                setDays(Math.floor(difference / (1000 * 60 * 60 * 24 * 7)));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [days]);

    function timeBetweenDates(toDate) {
        const now = new Date();
        const difference = toDate.getTime() - now.getTime();
        return difference;
    }

    return (
        <div className='container-ml mt-[14px] pb-[100px]'>

            <div className='grid  grid-cols-2 gap-20 '>
                <div className='  col-span-1'>
                    <div>
                        <div className='my-[55px]'>
                            <h3 className='text-black font-600 text-[50px] mb-[18px]   '>The Peoples House</h3>
                            <p className='text-black text-[30px] font-600 mb-[25px]  '>Born In The Blood Of Patriots</p>

                            <p className='text-black text-[16px] font-bold mb-6 mb-[25px] text-justify'>Once upon a time, in a land of vast beauty and untamed wilderness, brave men and women dared to dream. They dreamt of a nation that would stand for freedom, justice, and the unalienable rights of every individual. A nation where people from all walks of life could come together and build a better future, united in the pursuit of happiness.</p>
                            <div className='flex justify-end    '>
                                <div className='flex justify-center mx-1 flex-col items-center'>
                                    <PeopleHousemodal />
                                </div>
                                <div className='mx-1 flex flex-col justify-center mx-1 items-center'>
                                    <PeopleHouseAudio />
                                </div>
                            </div>
                            <div className="lg:flex lg:flex-row flex-col    items-center gap-10 my-8">
                                <Link to="/subscribe">
                                    <button className="bg-red text-white font-medium py-2 px-5 flex items-center rounded-md gap-6 w-[250px] text-center justify-center my-4">
                                        <span>Subscribe</span>
                                    </button>
                                </Link>

                                <label htmlFor="my-modal-5" className="bg-primary text-white font-medium py-2 px-5 flex justify-center  items-center rounded-md gap-6   text-center w-[250px] min-w-[250px] my-4">
                                    <span>Request Invite</span>
                                </label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                <Invite />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='  col-span-1'>




                    <div className='text-center'>
                        <button className="  px-10 py-2 bg-[#002868] text-[25px] font-700 text-white my-3 rounded-[10px]">Donation</button>
                        <p className='bg-primary  rounded-t-[10px] text-white py-2 text-[20px] font-800'>Next Presidential Election Starts In:</p>
                        <div className='relative'>
                            <div>
                                {/* <p className='bg-primary  rounded-t-[10px] text-white py-2 text-[20px] font-800'>Next Presidential Election Starts In:</p> */}
                                <img alt='' width="100%" className='h-[450px]' src={img} />
                            </div>
                            <div className='absolute left-[15%] top-[20%] mx-4'>

                                <div className='flex items-center justify-center'>
                                    <div className='grid grid-cols-3  gap-4'>

                                        <div className='text-white font-semibold text-[30px]'>

                                            <p className='bg-red w-full h-5'></p>
                                            <p>{year}</p>
                                            <p>Year</p>
                                        </div>
                                        <div className='text-white font-semibold text-[30px]'>
                                            <p className='bg-white w-full h-5'></p>
                                            <p>{month}</p>
                                            <p>Month</p>
                                        </div>
                                        <div className='text-white font-semibold text-[30px]'>
                                            <p className='bg-primary w-full h-5'></p>
                                            <p>{days  }</p>
                                            <p>Weeks</p>
                                        </div>
                                    
                                        <div className='text-white font-semibold text-[30px]'>
                                            <p className='bg-red w-full h-5'></p>
                                            <p>{hours} </p>
                                            <p>Hours</p>
                                        </div>
                                        <div className='text-white font-semibold text-[30px]'>
                                            <p className='bg-white w-full h-5'></p>
                                            <p>{minutes} </p>
                                            <p>Minutes</p>
                                        </div>
                                        <div className='text-white font-semibold text-[30px]'>
                                            <p className='bg-primary w-full h-5'></p>
                                            <p>{seconds} </p>
                                            <p>Second</p>
                                        </div>
                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleHouse;


