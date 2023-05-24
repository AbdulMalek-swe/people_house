import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
 
const Invite = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
        
    return (
        <div className="modal p-0 overflow-hidden"> 
        <div className="modal-box relative p-0 overflow-hidden"  style={{ maxWidth: '80%' }}>
        <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2 z-10" >✕</label>
          <div className='w-full'>
          
 
        <div className=' relative bg-[#B22234]'>
        <div className=' container-ml '>
            <div className='pt-1'>
                <h1 className='text-white text-[40px] px-3 border-l-[5px] border-[#ffffff] h-[60px] my-[48px]'>Request Invitation</h1>
            </div>
            <div>
            <form className="space-y-4 pb-10">
                           <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <CustomeLabel name={" name"} />
                                <input type="text" placeholder="Enter your name" className="block   px-5 py-3 mt-2 text-[#00000080]  placeholder-[#00000080]  bg-[#ffffff33] shadow-lg rounded-lg " required />
                            </div>  
                             <div>
                                <CustomeLabel name={"Email"} />
                                <input type="email" placeholder="Enter your   email" className="block  px-5 py-3 mt-2 text-[#00000080]  placeholder-[#00000080] bg-[#ffffff33]  shadow-lg rounded-lg " required />
                            </div>
                            <div>
                                <CustomeLabel name={"State/Territory"} />
                                <input type="text" placeholder="State/Territory" className="block   px-5 py-3 mt-2 text-[#00000080] placeholder-[#00000080] bg-[#ffffff33]  shadow-lg rounded-lg " />
                            </div>
                            <div>
                                <CustomeLabel name={"Phone Number"} />
                                <input type="email" placeholder="Phone Number( (123-4567890)" className="block   px-5 py-3 mt-2 text-[#00000080]  placeholder-[#00000080] bg-[#ffffff33]  shadow-lg rounded-lg " required />
                            </div>
                           </div>
                           <div className='text-center mb-[30px]'>
                            <div className='pb-6 text-center flex justify-center'>
                            
                            <ReCAPTCHA
                             className="custom-recaptcha"
    sitekey='6Le4qNklAAAAADWDILZSu-a_qWj2PBfFlbFVcbHW'
    onChange={onChange}
    theme='gray'
    required
  />
                         
                            </div>
                           </div>
                            <button className="bg-primary text-white mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide   capitalize transition-colors duration-300 transform bg-[#FFFFFFB2] rounded-lg hover:bg-blue-400 flex justify-center items-center gap-4 mt-20">
                                <span className='text-[#ffffff]'>Request Invitation</span>
                                
                            </button>
                        </form>
            </div>
               
            
        </div>
    </div>
     

    </div>
        </div>
    </div>
    );
};

export default Invite;
export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-slate-300">

            {name}

            
        </label>
    )

}