import React from 'react';

const Contact = () => {
    return (
        <div className='relative bg-contact bg-center bg-cover bg-no-repeat bg-static bg-fixed  ' id='contact'>
        <div className='container-ml   pb-10'>
            <div className='pt-1'>
                <h1 className='text-white text-[40px] px-3 border-l-[5px] border-[#eae9e9d4] h-[60px]  '>Contract</h1>
                
            </div>
            <div>
            <form className="space-y-4">
                           <div className='grid grid-cols-2 gap-4'>
                           <div>
                                <CustomeLabel name={" Name"} />
                                <input type="text" placeholder="Enter your name" className="block w-full px-5 py-3 mt-2 text-[##eae9e9d4]  placeholder-[##eae9e9d4] bg-transparent shadow-lg rounded-lg " required />
                            </div>
                            <div>
                                <CustomeLabel name={"Email"} />
                                <input type="email" placeholder="Enter your  email" className="block w-full px-5 py-3 mt-2 text-[##eae9e9d4]  placeholder-[##eae9e9d4] bg-transparent shadow-lg rounded-lg " required />
                            </div>
                            <div>
                                <CustomeLabel name={"Your Subject"} />
                                <input type="text" placeholder="Your Subject" className="block w-full px-5 py-3 mt-2  bg-transparent shadow-lg rounded-lg text-[##eae9e9d4]  placeholder-[##eae9e9d4] " />
                            </div>
                           </div>
                            <div>
                                <CustomeLabel name={"Your message"} />
                                <textarea type="text" placeholder="Enter your message here" className="block w-full px-5 py-3 mt-2 text-[##eae9e9d4]  placeholder-[##eae9e9d4] bg-transparent shadow-lg rounded-lg " rows={4} />
                            </div>
                            <button className="  mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide   capitalize transition-colors duration-300 transform bg-[#FFFFFFB2] rounded-lg hover:bg-blue-400 flex justify-center items-center gap-4 rounded-[20px]">
                                <span className='text-[#002868]  '>SEND NOW</span>
                                
                            </button>
                        </form>
            </div>
               
            
        </div>
    </div>
    );
};

export default Contact;

export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-white">

            {name}

            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg></span>
        </label>
    )

}