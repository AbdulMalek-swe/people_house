import { useState } from "react";

const Polls = () => {
    // Sample state for a poll (you'd fetch this from your backend in a real application)
    const [poll, setPoll] = useState({
      question: "Who should be the next President?",
      options: ["Candidate 1", "Candidate 2", "Candidate 3"],
      votes: [0, 0, 0],  // Vote counts for each option
    });
  
    const vote = (index) => {
      setPoll(currentPoll => {
        const newVotes = [...currentPoll.votes];
        newVotes[index]++;
        return { ...currentPoll, votes: newVotes };
      });
    };
  
    return (
      <div className="bg-white text-white py-20">
        <div className="container-ml">
        <div className='pt-[10px] text-white'>
                    <h1 className=' text-primary text-[40px] px-3 border-l-[5px] border-primary h-[60px] my-[18px]'>Poll</h1>
                    <p className='px-3 text-primary  font-500 text-[20px] mb-[35px]'>{poll.question}</p>
                </div>
      <div className="bg-white text-black pt-[75px] px-[30px] pb-[35px] rounded-[10px]">
        <ul>
          {poll.options.map((option, index) => (
            <li key={index} className="flex justify-between   items-center   border border-primary rounded-lg mt-2 px-4 py-1">
            <div>
            <h1> {option}</h1>
              <button className="bg-primary text-white px-4 py-1 rounded-lg my-2" onClick={() => vote(index)} >Vote  </button>
            </div>
             <div>
             <span className=""> {poll.votes[index]} votes</span>
             </div>
            </li>
          ))}
        </ul>
      </div>
        </div>
      </div>
    );
  };
  
  export default Polls;


   {/* <div className='relative bg-countImg bg-no-repeat bg-center   bg-cover '>
                                    <div className='grid grid-cols-3  gap-4 lg:p-10 md:p-5 '>
                                        <div className='text-white font-semibold text-[30px] border-4'>

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
                                            <p>{week  }</p>
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
                          
                            </div> */}