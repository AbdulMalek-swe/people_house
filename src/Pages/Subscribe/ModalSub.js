import React from 'react';

const ModalSub = ({data}) => {
    console.log(data);
    return (
        <div> 
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-left text-[#000000] text-[30px]"> {data?.name}</h3>
    <p className="py-4 text-left text-[#000000B2]  text-[20px]">{data?.subH}</p>

    <div className="form-control">
 <div className='border border-[#002868] rounded-[10px] flex justify-between py-[15px]'>
 <label className="cursor-pointer label">
    
    <input type="radio" name="radio-1" className="radio text-[#002868] ml-[15px]" />
      <span className="label-text mx-[26px] text-black">12 months</span>
      
    </label>
    <button className='px-[16px] py-[11px] text-[20px] bg-[#00000033] rounded-[10px] mr-[30px]'> {`$${data?.y}/mo`} </button>
 </div>
 <div className='border border-[#002868] rounded-[10px] flex justify-between py-[15px] mt-[10px]'>
 <label className="cursor-pointer label">
    
    <input type="radio" name="radio-1" className="radio text-[#002868] ml-[15px]" />
      <span className="label-text mx-[26px] text-black">1 months</span>
      
    </label>
    <button className='px-[16px] py-[11px] text-[20px] bg-[#00000033] rounded-[10px] mr-[30px]'> {`$${data?.m}/mo`} </button>
 </div>

 <div className='py-[29px] px-[34px] bg-[#ECECEC] my-[20px] rounded-[10px]'>
    <div className='flex justify-between text-[#000000]'>
  <h3>Total</h3>
  <h3>${data?.amount}</h3>
    </div>
    <p className='text-left my-[23px]'> 
    {data?.des}
    </p>
 </div>
</div>
    <div className="modal-action flex items-center">
      <label htmlFor="my-modal-5" className="text-[#B22234] text-[20px]">Cancel</label>
      <button htmlFor="my-modal-5" className="px-[32px] py-[10px]  bg-[#002868] rounded-[10px] text-white">Choose Payment method</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ModalSub;