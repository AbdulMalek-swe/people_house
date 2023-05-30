 
import PeopleHouse from "../components/Home/PeopleHouse"
// import { MdNewspaper } from "react-icons/md"
import News from "../components/Home/News"
import Blog from "../components/Home/Blog"
import Reading from "../components/Home/Reading"
import Podcast from "../components/Home/Podcast"
import Trending from "../components/Home/Trending"
import Partner from "../components/Home/Partner"
import Contact from "../components/Home/Contact"
// import Invite from "../components/Home/Invite"
import Footer from "../components/Footer/Footer"
import About from "../components/Home/About"
import Polls from "../components/Home/Polls"
import PeoplesContract from "../components/Home/PeoplesContract"

import Candidates from "../components/Home/Candidate"
import RealNews from "../components/Home/RealNews"
import PeoplesTownHall from "../components/Home/TownHall"
import Forum from "../components/Home/PeopleForum"



export const Home = () => {
    
     
    return (
        <div className="min-h-screen">
 
         <PeopleHouse/>
         <About/>
         <News/>
         <Blog/>
         <Polls/>
         <PeoplesContract/>
         <Candidates/>
         <RealNews/>
         <PeoplesTownHall/>
         <Forum/>
         <Reading/>
         <Podcast/>
         <Trending/>
         <Partner/>
         <Contact/>
         {/* <Invite/> */}
         <Footer/>
        </div>
    )
}
