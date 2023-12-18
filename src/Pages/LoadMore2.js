import React, { useEffect, useState } from 'react'

import axios from 'axios'

function LoadMore2() {

    const [post, setPost] = useState([])

    const [isCompleted, setIsCompleted] = useState(false)

    const [index, setIndex] = useState(5)

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> setPost(res.data))
        .catch((err)=> console.log(err.message))


    
    
      return () => {
        //
      }
    }, [])


   const handleLoadMore=(index)=>{



    if(index < post.length){
        setIndex(index+5)

    }

    else{
      setIsCompleted(true)
    }



    }


    const renderPost=post.slice(0, index)
    


  return (
    <div>
    
   {
    renderPost.map((x, index)=>

    <p>{index}:{x.title}</p>
    
    )
   }


 {
    isCompleted ?'Completed': <button onClick={()=>handleLoadMore(index)}>Load More</button>
 }  
    
    
    
    </div>
  )
}

export default LoadMore2