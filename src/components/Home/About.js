import React, { useEffect, useRef, useState } from 'react';

import { Collapse } from 'react-collapse';
import { AiFillSound } from 'react-icons/ai';
import { MdOutlineReadMore } from 'react-icons/md';
import { GrStar } from 'react-icons/gr';
import AboutModal, { AboutAudio, aboutData, audioData } from '../homeSubComponents/AboutSectionSub';
import { useLocation } from 'react-router-dom';
const About = () => {
  const { pathname } = useLocation()
  return (
    <div className='bg-[#002868] pb-[100px]' id='about'>
      {pathname == "/about" ? <div className='bg-white  pb-5'>

        {/* collapse data here  */}
        <AboutAll />
      </div>

        :

        <div className='flex  '>

          <div className='mt-[130px] md:block hidden   '>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 2].map(item => <div >
              <div className='text-white flex  '>

                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
                <GrStar className='mx-[2px] my-[17px]' />
              </div>
            </div>)}
          </div>
          <div className='  mb-[10px] pt-1 w-full mr-8'>
            <div>
              <div className='text-white'>
                <h1 className='  text-[40px] px-3 border-l-[5px] border-[#ffffff] h-[60px] my-[8px]'>About</h1>
                <p className='px-3  font-500 text-[20px] mb-[22px]'> Content Here</p>
              </div>
              <div>


                {/* react collapse use here  */}
                <div className={`border border-white  grid         sm:hover:grid-cols-6   grid-cols-5 gap-0 `}>
                  <div className="contacts hover:col-span-2">
                    <div className={`  h-[600px]  bg-[#B22234]  text-[24px]   cursor-pointer contact  flex items-center`} >
                      <div className='transform -rotate-90 text-white  flex'>
                        PLEDGE AND CREDO
                      </div>

                    </div>

                    <div className={`h-[600px]   bg-[#B22234]  text-[24px] about-container  contacts-footer     `}  >
                      <div  >

                        <div className='pt-[60px] px-5'>
                          <div className='text-white text-[30px]   mb-[22px]'>
                            PLEDGE AND CREDO
                          </div>
                          <div className=' text-white text-[16px] text-justify'>
                            We, the members of this community, pledge to honor and protect the sacrifices made by our military heroes who shed their blood to secure our freedom and ensure the future of our nation. We recognize that their sacrifices were hard-won and the stories lying beneath the headstones at Arlington Cemetery and other military cemeteries across the country are the seeds of freedom that must be protected at all costs.
                          </div>
                          <div className='flex justify-end  '>
                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-white'>

                              <span><MdOutlineReadMore size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>

                                <label htmlFor={`my-modal-10`}  >

                                  <span className='hover:underline cursor-pointer'>Read more</span> </label>
                                <AboutModal data={aboutData[0]} />
                              </span>
                            </div>




                            <div className='flex justify-center mx-1 flex-col items-center text-white'>

                              <span><AiFillSound size={18} /></span>
                              <label htmlFor="my-modal-l1" className="text-[10px] text-white  hover:underline"> Listen </label>
                              <AboutAudio data={audioData[0]} />

                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="contacts hover:col-span-2">
                    <div className={`h-[600px]  bg-[#ffffff]  text-[24px] flex items-center contact justify-center cursor-pointer     `} >
                      <div className={`transform -rotate-90 text-black `} >
                        ABOUT
                      </div>

                    </div>

                    {/* second collapse code  */}

                    <div className={`h-[600px]   bg-[#ffffff]  text-[24px] about-container  contacts-footer`}   >
                      <div  >

                        <div className='pt-[60px] px-5'>
                          <div className='text-black text-[30px]   mb-[22px]'>
                            ABOUT
                          </div>
                          <div className=' text-black text-[16px] text-justify'>
                            At The Peoples House, our vision is to ignite a powerful movement that restores the United States to its founding principles, creating a future where equa lity of education and opportunity, as well as proper environmental management, prevail for all. We envision a nation where the government serves the people, not the other way around, and where every citizen's voice is heard and valued.


                          </div>
                          <div className='flex justify-end  '>

                            <div className=' flex flex-col justify-center mx-1 items-center text-black'>

                              <span><MdOutlineReadMore size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>

                                <label htmlFor={`my-modal-11`}  >

                                  <span className='hover:underline cursor-pointer'>Read more</span> </label>
                                <AboutModal data={aboutData[1]} />
                              </span>
                            </div>
                            <div className='flex justify-center mx-1 flex-col items-center text-black'>

                              <span><AiFillSound size={18} /></span>
                              <label htmlFor="my-modal-l2" className="text-[10px] text-black  hover:underline"> Listen </label>
                              <AboutAudio data={audioData[1]} />

                            </div>

                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="contacts hover:col-span-2">
                    <div className={`h-[600px]  bg-[#002868]  text-[24px] flex items-center justify-center cursor-pointer   contact`} >
                      <div className='transform -rotate-90 text-white  flex'>
                        VISION
                      </div>

                    </div>

                    {/* second collapse code  */}

                    <div className={`h-[600px]   bg-[#002868]  text-[24px] about-container  contacts-footer`}    >
                      <div  >

                        <div className='pt-[60px] px-5'>
                          <div className='text-white text-[30px]   mb-[22px]'>
                            VISION
                          </div>
                          <div className=' text-white text-[16px] text-justify'>
                            At The Peoples House, our vision is to ignite a powerful movement that restores the United States to its founding principles, creating a future where equality of education and opportunity, as well as proper environmental management, prevail for all. We envision a nation where the government serves the people, not the other way around, and where every citizen's voice is heard and valued.


                          </div>
                          <div className='flex justify-end  '>

                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-white'>

                              <span><MdOutlineReadMore size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>

                                <label htmlFor={`my-modal-12`}  >

                                  <span className='hover:underline cursor-pointer'>Read more</span> </label>
                                <AboutModal data={aboutData[2]} />
                              </span>
                            </div>


                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-white'>

                              <span><AiFillSound size={18} /></span>
                              <label htmlFor="my-modal-l3" className="text-[10px] text-white  hover:underline"> Listen </label>
                              <AboutAudio data={audioData[2]} />
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="contacts hover:col-span-2">
                    <div className={`h-[600px]  bg-[#B22234]  text-[24px] flex items-center justify-center cursor-pointer contact  `} >
                      <div className='transform -rotate-90 text-white  flex'>
                        MISSION
                      </div>

                    </div>

                    {/* second collapse code  */}

                    <div className={`h-[600px]    bg-[#B22234]  text-[24px] about-container  contacts-footer contacts-footer`}   >
                      <div  >

                        <div className='pt-[60px] px-5'>
                          <div className='text-white text-[30px]   mb-[22px]'>
                            MISSION
                          </div>
                          <div className=' text-white text-[16px] text-justify'>
                            Content Coming Soon

                          </div>
                          <div className='flex justify-end  '>
                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-white'>

                              <span><MdOutlineReadMore size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>

                                <label htmlFor={`my-modal-13`}  >

                                  <span className='hover:underline cursor-pointer'>Read more</span> </label>
                                <AboutModal data={aboutData[3]} />
                              </span>
                            </div>

                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-white'>
                              <span><AiFillSound size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>
                                {/* The button to open modal */}

                                {/* The button to open modal */}
                                <label htmlFor="my-modal-4"  ><span className='hover:underline cursor-pointer'>Listen</span> </label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                                <div className="modal">
                                  <div className="modal-box relative">
                                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="py-4 text-[40px] text-center text-[#002868]">Mission </h3>
                                    <p className="text-justify py-4 text-[#000000] text-[20px]">Comming Soon
                                    </p>

                                  </div>
                                </div></span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="contacts hover:col-span-2">
                    <div className={`h-[600px]  bg-[#ffffff]  text-[24px] flex items-center justify-center cursor-pointer  contact  `} >
                      <div className='transform -rotate-90 text-black  flex'>
                        PLAN
                      </div>

                    </div>

                    {/* second collapse code  */}

                    <div className={`h-[600px]   bg-[#ffffff]  text-[24px] about-container contacts-footer `}   >
                      <div  >

                        <div className='pt-[60px] px-5'>
                          <div className='text-black text-[30px]   mb-[22px]'>
                            PLAN
                          </div>
                          <div className=' text-black text-[16px] text-justify'>
                            Content coming soon
                          </div>
                          <div className='flex justify-end  '>
                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-black'>

                              <span><MdOutlineReadMore size={18} /></span>
                              <span className='text-[10px] m-[0px]   '>

                                <label htmlFor={`my-modal-14`}  >

                                  <span className='hover:underline cursor-pointer'>Read more</span> </label>
                                <AboutModal data={aboutData[4]} />
                              </span>
                            </div>
                            <div className='mx-1 flex flex-col justify-center mx-1 items-center text-black'>

                              <span><AiFillSound size={18} /></span>
                              <label htmlFor="my-modal-l5" className="text-[10px] text-black  hover:underline"> Listen </label>
                              <AboutAudio data={audioData[4]} />
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>}

    </div>

  );
};

export default About;



const AboutAll = () => {
  const [expandedPosts, setExpandedPosts] = useState([]);
  const togglePost = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  return (
    <div>
      {aboutData.map((post) => (
        <div key={post.id} className='shadow-lg my-6 p-4'>
          <h1 className='text-center text-4xl  '>{post?.mh1}</h1>
          <h1 className='text-center text-4xl   my-8'>{post?.th1}</h1>
          <p className="text-gray-800">
            {expandedPosts.includes(post?.id)
              ? post.text1
              : `${post?.text1?.slice(0, 400)}...`}
          </p>
          <h1 className='text-center text-4xl   my-8'>{post?.th2}</h1>
          <p className="text-gray-800">
            {expandedPosts.includes(post?.id)
              ? post.text2
              : `${post?.text2.slice(0, 400)}...`}
          </p>
          <div className='text-center'>
            <button
              onClick={() => togglePost(post.id)}
              className="text-center px-4 py-2 rounded text-black bg-white hover:underline mt-4 shadow-lg"
            >
              {expandedPosts.includes(post.id) ? 'See less' : 'See more'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
