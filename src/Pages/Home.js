import { useState } from "react"
import PeopleHouse from "../components/Home/PeopleHouse"
import { MdNewspaper } from "react-icons/md"
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


export const Home = () => {
     
    return (
        <div className="min-h-screen">
           
         <PeopleHouse/>
         <About/>
         <News/>
         <Blog/>
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
