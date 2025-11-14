import millify from 'millify';
import React from 'react'
import Card from '../../components/Card';
import { AiFillLike, AiFillDislike } from "react-icons/ai";






const Channel = ({video}) => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-4'>
        <img src={video.channelThumbnail[0].url} alt="" />
        <div>
            <h4 className='font-bold'>{video.channelTitle}</h4>
            <p className='text-gray-400'>{video.subscriberCountText}</p>
        </div>
        <button className='bg-white text-black px-3 h-9 transition
        hover:bg-gray-400 rounded-full'>Abone ol</button>
      </div>
      <div className='flex items-center bg-farkgray rounded-full cursor-pointer'>
        <div className='py-2 px-6 flex items-center gap-2 font-bold border-r
         border-zinc-700 text-sm'>
            <AiFillLike />
            <span>{millify(video.likeCount)}</span>
            </div>
        <div className='py-2 px-6'><AiFillDislike /></div>
      </div>
    </div>
  )
}

export default Channel
