
import PeopleHouse from "../components/Home/PeopleHouse"
// import { MdNewspaper } from "react-icons/md"

import Trending from "../components/Home/Trending"
import Partner from "../components/Home/Partner"

// import Invite from "../components/Home/Invite"

import About from "../components/Home/About"
import News from "../components/Home/News"
import Blog from "../components/Home/Blog"
import Reading from "../components/Home/Reading"
import Podcast from "../components/Home/Podcast"
// import Polls from "../components/Home/Polls"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton, WhatsappShareButton } from 'react-share';
import { Helmet } from "react-helmet"

export const Home = () => {
    const shareContent = {
        url: 'https://people-house.vercel.app/blog',
        title: 'My Awesome Content',
        description: 'This is some amazing content that I want to share!',
        image: 'https://example.com/image.jpg',
      }
    
    return (
        <div className="min-h-screen">
                   <Helmet>
        {/* Open Graph meta tags */}
        <meta property="og:title" content={shareContent.title} />
        <meta property="og:description" content={shareContent.description} />
        <meta property="og:url" content={shareContent.url} />
        <meta property="og:image" content={shareContent.image} />
      </Helmet>
                  <div>
      {/* Facebook Share Button */}
      <FacebookShareButton url={shareContent.url}>
        Share on Facebook
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton url={shareContent.url} title={shareContent.title}>
        Share on Twitter
      </TwitterShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton url={shareContent.url}>
        Share on LinkedIn
      </LinkedinShareButton>

      {/* Pinterest Share Button */}
      <PinterestShareButton url={shareContent.url} media={shareContent.image}>
        Share on Pinterest
      </PinterestShareButton>

      {/* WhatsApp Share Button */}
      <WhatsappShareButton url={shareContent.url} title={shareContent.title}>
        Share on WhatsApp
      </WhatsappShareButton>
    </div>




            <PeopleHouse />
            <About />
            <News />
            <Blog />
            {/* <Polls/> */}
            {/* <PeoplesContract/> */}
            {/* <Candidates/> */}
            {/* <RealNews/> */}
            {/* <PeoplesTownHall/> */}
            {/* <Forum/> */}
            <Reading />
            <Podcast />
            <Trending />
            <Partner />
            {/* <Contact/> */}
            {/* <Invite/> */}
            {/* <Footer/> */}
        </div>
    )
}
