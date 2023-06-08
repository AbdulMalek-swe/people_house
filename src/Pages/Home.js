 
import PeopleHouse from "../components/Home/PeopleHouse"
// import { MdNewspaper } from "react-icons/md"
 
import Trending from "../components/Home/Trending"
import Partner from "../components/Home/Partner"
 
// import Invite from "../components/Home/Invite"
 
import About from "../components/Home/About"
// import Polls from "../components/Home/Polls"
 
export const Home = () => {
    
     
    return (
        <div className="min-h-screen">
          
         <PeopleHouse/>
         <About/>
         {/* <News/> */}
         {/* <Blog/> */}
         {/* <Polls/> */}
         {/* <PeoplesContract/> */}
         {/* <Candidates/> */}
         {/* <RealNews/> */}
         {/* <PeoplesTownHall/> */}
         {/* <Forum/> */}
         {/* <Reading/> */}
         {/* <Podcast/> */}
         <Trending/>
         <Partner/>
         {/* <Contact/> */}
         {/* <Invite/> */}
         {/* <Footer/> */}
        </div>
    )
}
