import React, { useEffect, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";



function LoadMoreScroll() {

    const [post, setPost] = useState([])

    const [items, setItems] = useState(Array.from({ length: 20 }))

    const [hasMore, setHasMore] = useState(true)

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })));
          }, 1500);
      };


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> setPost(res.data))
        .catch((error)=> console.log(error.message))
      
    
      return () => {
        //
      }
    }, [])
  
    


  return (
    <div>
    LoadMoreScroll

    <InfiniteScroll 
    dataLength={items.length}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"


    
    >



    


    {
        post.map((x, index)=>

        <p>{index} : {x.title}</p>
        
        )
    }
    
    </InfiniteScroll>
    
    
    </div>
  )
}

export default LoadMoreScroll