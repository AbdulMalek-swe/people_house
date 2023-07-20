import React from 'react';
import { FacebookShareButton } from 'react-share';

const ModelShare = ({data}) => {
    return (
        <>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id='my-modal-s1' className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor='my-modal-s1' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="py-4 text-[40px] text-center text-red"> d</h3>
            <p className="text-justify py-4 text-[#000000] text-[20px]">
              
            </p>
            <h3 className="py-4 text-[40px] text-center text-red"> </h3>
            <p className="text-justify py-4 text-[#000000] text-[20px]">
            {/* <Helmet> */}
        {/* Open Graph meta tags */}
        {/* <meta property="og:title" content={shareContent.title} />
        <meta property="og:description" content={shareContent.description} />
        <meta property="og:url" content={shareContent.url} />
        <meta property="og:image" content={shareContent.image} /> */}
      {/* </Helmet> */}
                  <div>
      {/* Facebook Share Button */}
      <FacebookShareButton url={data}>
        Share on Facebook {data}
      </FacebookShareButton>
 

    
    </div>
            </p>
          </div>
        </div>
  
  
      </>
    );
};

export default ModelShare;