import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Card = ({video, isRow}) => {
  const [isHover,setIsHover]=useState(false);

  const source = (() => {
  if (isHover && Array.isArray(video.richThumbnail) && video.richThumbnail.length > 0) {
    return video.richThumbnail[0].url;
  }
  if (Array.isArray(video.thumbnail) && video.thumbnail.length > 0) {
    return video.thumbnail[video.thumbnail.length - 1].url;
  }
  return ""; // fallback
})();


  return (
    <Link to={`/watch?v=${video.videoId}`} onMouseEnter={()=> setIsHover(true)} 
    onMouseLeave={()=>setIsHover(false)}
    className={`${
      isRow ? "row" : ""}cursor-pointer`}>
      <div className='col-span-[140px]'>
        <img className='rounded-lg w-full h-full' src={source} alt="" />
      </div>

      <div className='flex gap-4 mt-5'>
       <img
  className="w-14 h-14 rounded-full"
  src={video.channelThumbnail?.[0]?.url || "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_120dp.png"}
  alt=""
/>

        <div>
          <h4 className='font-bold line-clamp-2'>{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className='flex gap-3'>
            <p>{video.viewCountText}</p>
            *
            <p>{video.publishedTimeText}</p>

          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
