import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import api from '../utils/api';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const SearchResult = () => {
    const [searchParams]= useSearchParams();

    const [data,setData]=useState(null);
    const [token,setToken]=useState();
    const [isLoading,setIsLoading]=useState(true)
    
    const query =searchParams.get("search_guery");

    useEffect(()=> {
        setIsLoading(true);
        let params={
            query,
            type:"video"
        };
        api.get(`/search`,{params})
        .then((res)=>
            {
                setData(res.data.data);
            setToken(res.data.continuation);
        })
        .catch((err) => console.log(err))
        .finally(()=> setIsLoading(false))
            
    } ,[]);


    console.log(token);
    console.log(data)
  return (

     
     <div className='p-4 sm:p-6 md:p-10 h-[90vh] overflow-y-auto'>
        <h2 className='text-xl mb-5'>
            <span className='font-bold'>{query} </span>
             için sonuçlar</h2>
             <div className='flex flex-col gap-5 justify-center'>
                {isLoading ? (
                    <p>yükleniyor..</p>
                ):(
                data.map(
                    (item)=>
                        item.type === "video" && (
                            <Card key={item.videoId} video={item} isRow/>
                        )
                    )
                )}
             </div>
     </div>
 
  )
}

export default SearchResult
