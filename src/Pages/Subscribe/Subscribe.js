import React, { useState } from 'react';
import img from '../../Assets/Photos/download.png'
import ModalSub from './ModalSub';
const Subscribe = () => {
    const [toggle,setToggle] = useState(false)
    const [data,setData] = useState({})
    const handle = e =>{
          setData(e)
        setToggle(true);
            // <ModalSub/>
      
    }
    return (
        <div className='container-ml mt-12'>
            {
    toggle && <ModalSub data={data} />
}
            <div className='text-center'>
                <div className='mb-[22px]'>
                    <h1 className='font-black mb-[32px] text-[40px]'>Choose your Marketing Plan</h1>
                    <p className='flex justify-center items-center mb-[16px] text-[18px]'>
                        <span>
                            <img alt='' src={img} className='w-[21px] h-[15px]' />
                        </span>
                        <span>Cancel Anytime</span>
                    </p>
                    <div className='flex justify-center'>
                        <div className="form-control  ">
                            <label className="cursor-pointer label">
                                <span className="label-text text-[17px] mx-4">Billed Yearly </span>
                                <input type="checkbox" className="toggle toggle-accent" />
                                <span className="label-text text-[17px]  mx-4">Billed Monthly</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {/* card design code here  */}
            <div>
                <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2'>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#B22234] pt-[79px] border  '  >
                            <h2 className='text-white text-[24px] font-bold '>Liberty Plan</h2>
                            <h1 className='text-white text-[64px] font-bold mt-[27px]'>$0</h1>
                            <p className='text-[#FFFFFFB2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            {/* <button  htmlFor="my-modal-5" className=''> Subscribe </button> */}
                            {/* The button to open modal */}
<label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor" onClick={()=>handle({name:"Liberty Plan",amount:20,m:3.00,y:36.00,des:"By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",subH:"Choose a billing period and finish the upgrade process"})}>Subscribe
</label>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#ffffff] pt-[79px] border' style={{}}>
                            <h2 className='text-[#000000] text-[24px] font-bold '>Patriot Plan</h2>
                            <h1 className='text-[#000000] text-[64px] font-bold mt-[27px]'>$2</h1>
                            <p className='text-[#000000B2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor" onClick={()=>handle({name:"Patriot Plan",amount:30,m:2.00,y:24.00,des:"By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",subH:"Choose a billing period and finish the upgrade process"})}>Subscribe
</label>
 
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#002868] pt-[79px] border' style={{}}>
                            <h2 className='text-white text-[24px] font-bold '>Eagle Plan</h2>
                            <h1 className='text-white text-[64px] font-bold mt-[27px]'>$8</h1>
                            <p className='text-[#FFFFFFB2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor" onClick={()=>handle({name:"Eagle Plan",amount:30,m:2.00,y:24.00,des:"By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",subH:"Choose a billing period and finish the upgrade process"})}>Subscribe
</label>
                   </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#B22234]  lg:pt-[79px] md:pt-[55px] border' style={{}}>
                            <h2 className='text-white text-[24px] font-bold '>Stars
&
 Stripes Plan</h2>
                            <h1 className='text-white text-[64px] font-bold mt-[27px]'>$15</h1>
                            <p className='text-[#FFFFFFB2] text-[14px]  font-normal   mb-[36px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor" onClick={()=>handle({name:"Stars & Stripes Plan",amount:60,m:5.00,y:60.00,des:"By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",subH:"Choose a billing period and finish the upgrade process"})}>Subscribe
</label>
         
                        </div>
                    </div>
                    <div className=''>
                        <div className='text-center  h-[380px] bg-[#ffffff] pt-[65px] border' style={{}}>
                            <h2 className='text-[#000000] text-[24px] font-bold '>Founding
Fathers Plan</h2>
                            <h1 className='text-[#000000] text-[64px] font-bold mt-[12px] mb-[11px]'>$20</h1>
                            <p className='text-[#000000B2] text-[14px]  font-normal   mb-[20px]'>per user, per month</p>
                            <label htmlFor="my-modal-5" className="text-black text-[24px]  font-normal  bg-white mb-[36px] py-[6px] px-[12px] pointer-cursor" onClick={()=>handle({name:"Founding Fathers Plan",amount:80,m:3.00,y:36.00,des:"By checking out, you agree with our Terms and Services and confirm that you have read our Privacy Policy. You can cancel recurring payments at any time.",subH:"Choose a billing period and finish the upgrade process"})}>Subscribe
</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;