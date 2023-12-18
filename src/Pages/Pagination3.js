import React, { useEffect, useState } from 'react'
import axios from 'axios'





function Pagination3() {

    const [post, setPost] = useState([])

    const [number, setNumber] = useState(1)

    const postPerPage=100

    const lastpost=number*postPerPage      // index

    const firstpost=lastpost-postPerPage   // index

    const currentpost=post.slice(firstpost, lastpost)


    const pageNumber=[]

    for (let i = 1; i < Math.ceil(post.length/postPerPage); i++) {

        pageNumber.push(i)
        
        
    }


    const handleButton=(x)=>{

        setNumber(x)

    }

    console.log('number', number)



    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res)=> setPost(res.data))
        .catch((error)=> console.log(error.message))


      
    
      return () => {
        //
      }
    }, [])
    


  return (
    <div>
    
    <table>

    <thead>
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>
    
    </tr>
    
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

    <button>Previous</button>

    

    {
        pageNumber.map((x)=>

        <button  onClick={()=>handleButton(x)}>{x}</button>
        
        )
    }


    <button>Next</button>



    
    
    
    
    </div>
  )
}

export default Pagination3