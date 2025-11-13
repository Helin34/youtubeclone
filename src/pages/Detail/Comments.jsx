import React, { useState,useEffect} from 'react'
import api from '../../utils/api';

const Comments = ({videoId}) => {
    const [isLoading,setIsLoading] =useState(true);
    const [comments,setComments]=useState();


     useEffect(()  =>{
        setIsLoading(true);
            api
            .get(`/comments?id=${videoId}`)
            .then((res)=> console.log(res.data))
            .catch((err)=> console.log(err))
            .finally(()=> setIsLoading(false));

        }, [videoId]);
      
      return <div className='my-6'>
        {isLoading ? (
            <p>yükleniyor...</p>

        ):(
            <>
             <h2>{comments.commentsCount} Yorum</h2>

                <input type="text" className='w-full bg-transparent
                border-b p-2 outline-none mb-5' placeholder='Yorum Ekleyin..' />
                {comments.data.map((i)=> (
                    <div>
                        <img src="" alt="" />
                    </div>
                ))}
             </>
        )}
       
      </div>;
  
};

export default Comments
