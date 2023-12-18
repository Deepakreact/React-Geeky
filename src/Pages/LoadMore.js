import React, { useEffect, useState } from 'react'
import axios from 'axios'

function LoadMore() {

    const [post, setPost] = useState([])

    const [index, setIndex] = useState(5)

    const [isCompleted, setIsCompleted] = useState(false)









    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> setPost(res.data))
        .catch((error)=> console.log(error.message))


      
    
      return () => {
        //
      }
    }, [])

    const renderPost=post.slice( 0, index)


    const loadMore=(index)=>{

      setIndex(index+5)

      if(index > post.length){

        setIsCompleted(true)

      }

      else{
        setIsCompleted(false)
    
      }




    }


    



  return (
    <div>
    

  {
    renderPost.map((x)=>

    <div>


    <p>{x.title}</p>
    
    
    </div>
    
    
    )
  }  


  {
    isCompleted ? <button>Thats It !</button>
    : <button onClick={()=>loadMore(index)}>Load More</button>
  }


    
    
    
    </div>
  )
}

export default LoadMore