import React, { useEffect, useState } from 'react'

import axios from 'axios'

function Pagination1() {


    const [post, setPost] = useState([])

    const [number, setNumber] = useState(1)

    const postPerPage=100

    

    const lastpost=number*postPerPage
    const firstpost=lastpost-postPerPage

    const currentpost=post.slice(firstpost, lastpost)

    const pageNumber=[]

    for (let i = 1; i < Math.ceil(post.length / postPerPage ); i++) {
        pageNumber.push(i)
        
    }

    





    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=> setPost(res.data))
        .catch((error)=> console.log(error.message))
      
    
      return () => {
        
      }
    }, [])


    const handlePageNumber=(x)=>{
        setNumber(x)


    }

    console.log(post.length)
    









  return (
    <div>
    
    
    <table>

    <thead>
    <th>ID</th>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>BODY</th>

    
    </thead>

     <tbody>

     {
        currentpost.map((x)=>

        <tr>

        <th>{x.id}</th>

        <th>{x.name}</th>
        <th>{x.email}</th>
        <th>{x.body}</th>
        
        
        </tr>
        
        )
     }
     
     
     </tbody>



    
    
    </table>

    <button>Previous</button>


    

    {
        pageNumber.map((x)=>

        <button onClick={()=>handlePageNumber(x)}>
        {x}
        
        </button>
        
        )
    }

    
    <button   disabled={number===pageNumber.length}  onClick={()=>setNumber(number +1 )}>Next</button>
    
    
    
    </div>
  )
}

export default Pagination1