import React from 'react';
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const ModelShare = ({data}) => {
    return (
        <>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id='my-modal-s1' className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor='my-modal-s1' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            
      {/* Facebook Share Button */}
      <FacebookShareButton url={data}  title="facebook share">
        <FacebookIcon className='rounded-full mx-2'/>
      </FacebookShareButton>
      <LinkedinShareButton url={data}  title="linkedin share">
      <LinkedinIcon className='rounded-full mx-2'/>
      </LinkedinShareButton>
      <TwitterShareButton url={data}  title="twitter share">
        <TwitterIcon className='rounded-full mx-2'/>
      </TwitterShareButton>
      <InstapaperShareButton url={data}  title="instgram share">
        <InstapaperIcon className='rounded-full mx-2'/>
      </InstapaperShareButton>
  
          </div>
        </div>
  
  
      </>
    );
};

export default ModelShare;