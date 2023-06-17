import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
   
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        console.log(visible)
    }, [visible])
const [agree,setAgree] = useState(false)
const handleAgree = e =>{
    setAgree(!agree)
}
    return (
        <div className="relative bg-blog-banner bg-center bg-cover bg-no-repeat bg-static bg-fixed">
             
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="relative  z-10">

                <div className=" flex flex-wrap-reverse items-center justify-center  px-6 mx-auto py-10">
                    {
                        visible &&
                        <>
                        <div className={`max-w-sm p-3.5 bg-white mt-[10%] `}>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>I.Core values</p>
                                <ul className='list-disc'>
                                    <li>Respect fellow citizens.</li>
                                    <li>Uphold the rule of law.</li>
                                    <li>Honor the original contract with America, which is the Constitution..</li>
                                    <li>Understand that this is a government by, for, and of the people.</li>
                                    <li>Review the Constitution, amendments, and Bill of Rights.</li>
                                    <li>Hold politicians accountable.</li>
                                    <li>Engage in discussions and offer suggestions.</li>
                                    <li>Participate in democracy by voting in all elections.</li>
                                    <li>Protect children, the elderly, and those who cannot protect themselves.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>II. Encouraged Behaviour</p>
                                <ul className='list-disc'>
                                    <li>Participate in open debate and respectful discussions.</li>
                                    <li>Show kindness and respect for others, regardless of differing beliefs.</li>
                                    <li>Contribute to creating a new contract for America..</li>
                                    <li>Participate in polls.</li>
                                    <li>Use proper language, avoiding vulgarity or disrespect.</li>
                                    <li>Recruit and invite others to join the movement.</li>

                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>III. Conflicts of Interest</p>
                                <ul className='list-disc'>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>IV. Conflicts of Interest</p>
                                <ul className='list-disc'>
                                    <li>Conflicts of interest will be handled by a rotating ethics panel..</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>V. Privacy and Personal Information</p>
                                <ul className='list-disc'>
                                    <li>Members' information will not be sold, traded, or leased.</li>
                                    <li>Members will not be targeted for advertisers.</li>
                                    <li>All members' information will remain private.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>VI. Reporting and Addressing Violations</p>
                                <ul className='list-disc'>
                                    <li>Violations will be reviewed by a rotating ethics panel.</li>
                                    <li>Repeated violators may be relegated to the "zoo" and/or expelled from the platform.</li>
                                </ul>
                            </div>
                            <div className="flex flex-col space-y-2 p-3.5">
                                <p>VII. Political Neutrality</p>
                                <ul className='list-disc'>
                                    <li>While political neutrality is not required, members are expected to respect others and their opinions.</li>

                                </ul>
                            </div>

                            <hr />

                            <button className='px-6 py-3.5 bg-rose-700 text-white rounded-md mt-4 ml-auto block '  onClick={()=>handleAgree()}>Agree</button>
                    </div>
                        </>
                    }

                    <div className="w-full max-w-lg mx-auto mt-6 ">


                        <div className="flex flex-col justify-center items-center mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-people text-slate-300" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                            </svg>
                        </div>

                        <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-slate-200 capitalize md:text-3xl">
                            Signup
                        </h1>


                        <form className="space-y-4">
                            <div>
                                <CustomeLabel name={"Username"} />
                                <input type="text" placeholder="Enter Your Username Or Email" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg border border-white " required />
                            </div>
                            <div>
                                <CustomeLabel name={"Email"} />
                                <input type="email" placeholder="Enter Your Username Or Email" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " required />
                            </div>

                            <div>
                                <CustomeLabel name={"First Name"} />
                                <input type="text" placeholder="First Name" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Last Name"} />
                                <input type="text" placeholder="Last Name" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>

                            <div>
                                <CustomeLabel name={"Password"} />
                                <input type="password" placeholder="Password" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>

                            <div>
                                <CustomeLabel name={"Password Confirmation"} />
                                <input type="password" placeholder="Confirm Password" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Cell phone Number"} />
                                <input type="tel" placeholder="Cell Phone Number" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Birth Month and Year"} />
                                <input type="date" placeholder="Enter Your Password" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"State"} />
                                <input type="text" placeholder="State" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"City"} />
                                <input type="text" placeholder="State" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Country"} />
                                <input type="text" placeholder="Country" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Political Affiliation"} />
                                <input type="text" placeholder="Democrate" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Number of National Elections voted in"} />
                                <input type="text" placeholder="1" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>
                            <div>
                                <CustomeLabel name={"Number of State Elections voted in"} />
                                <input type="text" placeholder="1" className="block w-full px-5 py-3 mt-2 text-slate-300 placeholder-gray-400 bg-transparent shadow-lg  rounded-lg   border border-white " />
                            </div>

                            <div className="flex flex-col justify-start text-slate-300">
                                <div className="flex items-center gap-5">
                                    <input type="checkbox" name="remember" className="mr-1 rounded-sm focus:ring-violet-400 focus:ring-2 " checked={agree?true:false}  />
                                   
                                    <label for="remember" className="text-sm ">
                                        Commitment to Engage in polite Political Discourse to help create a new "People's contract with america"
                                    </label>

                                </div>
                                <p for="remember" className="text-sm m-4 pl-4 ">
                                    I have read and agree the <span className='font-medium text-slate-50 cursor-pointer' onClick={() => setVisible(!visible)}>code of Ethics</span>
                                </p>

                            </div>
                            <button className="  mx-auto max-w-xs px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800  rounded-lg   border border-white hover:bg-blue-400 flex justify-center items-center gap-4">

                                <span className='text-center'>Sign up</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </form>
                        <div className="mt-6 text-center">
                            <Link to="/login" className="text-sm text-slate-300 hover:underline ">
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </div>



                </div>

                {/* main container */}
            </div>

        </div>
    );
};

export default Signup;



export const CustomeLabel = ({ name }) => {
    return (
        <label className="flex mb-2 text-sm text-slate-300 capitalize">

            {name}

            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" className="bi bi-asterisk text-red" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
            </svg></span>
        </label>
    )

}