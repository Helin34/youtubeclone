import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import Channel from "./Channel";
import Description from "./Description";
import Card from "../../components/Card"


const Detail = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    if (!id) return;

    api
      .get(`/video/info`, { params: { id, extend: 1 } })
      .then((res) => setVideo(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Helper: video süresini dakika:saniye formatına çevir
  

  return (
    <div className="detail-page h-screen overflow-auto p-4">
      {!id ? (
        <p className="text-red-500">❌ Video ID bulunamadı</p>
      ) : !video ? (
        <p className="text-gray-500">⏳ Video yükleniyor...</p>
      ) : (
        <>
          {/* Video Player */}
          {video?.id && (
            <div className="h-[50vh] lg:h-[60vh] rounded overflow-hidden mb-4">
              <ReactPlayer
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${video?.id}`}
                controls
              />
            </div>
          )}

          {/* Başlık */}
          <h1 className="my-3 text-2xl font-bold">{video.title}</h1>

         

          {/* Kanal bilgisi */}
          <Channel video={video} />

          <Description  video={video}/>

          {/* <Comments /> */}
        </>
      )}

      <div className="flex flex-col gap-5 p-1">
        {video?.relatedVideos.data.map(
          (item)=> 
            item.type === "video" && (
              <Card video={item} key ={item.videoId} isRow/>
            )
        )}
        
      </div>
    </div>
  );
  
};

export default Detail;
