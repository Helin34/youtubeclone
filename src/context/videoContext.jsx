// videoContext.jsx
import { createContext, useEffect, useState } from "react";
import { categories } from "../utils/constants";  // senin constants dosyan
import api from "../utils/api";
import Feed from "../pages/Feed";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading,setIsLoading] =useState(false);
// eslint-disable-next-line no-unused-vars
const [error, setError] = useState(null);

  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    
      let type = category.type;
      if (type === "menu") return;


      const url =
  type === "home"
    ? "/home"
    : type === "trending"
    ? "/trending"
    : `/search?query=${encodeURIComponent(category.name)}`;

    setIsLoading(true);
    console.log("api isteği")

    
      api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err)=>setError(err.message))
      .finally(()=>setIsLoading(false));
}, [category]);


  return (
    <VideoContext.Provider value={{ videos, category,isLoading,error, setCategory }}>
      {children}
    </VideoContext.Provider>
  );
};
