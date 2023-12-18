import React, { useEffect, useState } from 'react'

import axios from 'axios'

function Pagination() {

    const [post, setPost] = useState([])

    const [number, setNumber] = useState(1)

    const postperpage=50

    const lastpost=number*postperpage

    const firstpost=lastpost-postperpage

    const currentpost=post.slice(firstpost, lastpost)




   const  pageNumber=[]











    for (let i = 1; i < Math.ceil(post.length / postperpage); i++) {
        pageNumber.push(i)
        
    }

    

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=> setPost(res.data))
        .catch((error)=> console.log(error.message))
      
    
      return () => {
        
      }
    }, [])


   const  handlePageNumber=(x)=>{

    setNumber(x)

    console.log(x)

    }








    


  return (
    <div>
    
    Pagination


    <table>

    <thead>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>
    
    </thead>

    <tbody>

    {
        currentpost.map((x)=>

        <tr>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.email}</td>
        <td>{x.body}</td>
        
        
        </tr>
        
        
        
        )
    
    
    }
    
    </tbody>
    
    </table>

    <button  disabled={number===1}   onClick={()=>setNumber(number-1)}>
    
    Previous
    </button>  

    {pageNumber.map((x)=> 
        <button  onClick={()=>handlePageNumber(x)}>{x}</button>
        
        
        )}


    
    <button  disabled={number===pageNumber.length}   onClick={()=>setNumber(number+1)}>
    
    Next
    </button>

   
    
    
    </div>
  )
}

export default Pagination