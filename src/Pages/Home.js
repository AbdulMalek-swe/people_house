
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

export const Home = () => {
    const shareContent = {
        url: 'https://example.com',
        title: 'My Awesome Content',
        description: 'This is some amazing content that I want to share!',
        image: 'https://example.com/image.jpg',
      }
    const handleShare = (platform) => {
        switch (platform) {
          case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareContent.url}`, '_blank');
            break;
          case 'twitter':
            window.open(`https://twitter.com/intent/tweet?url=${shareContent.url}&text=${encodeURIComponent(shareContent.title)}`, '_blank');
            break;
          case 'linkedin':
            window.open(`https://www.linkedin.com/shareArticle?url=${shareContent.url}`, '_blank');
            break;
          case 'pinterest':
            window.open(`https://pinterest.com/pin/create/button/?url=${shareContent.url}&media=${shareContent.image}`, '_blank');
            break;
          case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(`${shareContent.title} ${shareContent.url}`)}`, '_blank');
            break;
          default:
            break;
        }
      };
    return (
        <div className="min-h-screen">
 <div>
        <button onClick={() => handleShare('facebook')}>Share on Facebook</button>
        <button onClick={() => handleShare('twitter')}>Share on Twitter</button>
        <button onClick={() => handleShare('linkedin')}>Share on LinkedIn</button>
        <button onClick={() => handleShare('pinterest')}>Share on Pinterest</button>
        <button onClick={() => handleShare('whatsapp')}>Share on WhatsApp</button>
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
