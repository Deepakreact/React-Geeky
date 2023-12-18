import React, { useMemo, useState } from 'react'



function UseMemo4() {

    const [counterone, setCounterone] = useState(0)

    const [countertwo, setCountertwo] = useState(0)

    const handleCounter1=()=>{
        setCounterone(counterone+1)
    }

    const handleCounter2=()=>{
        setCountertwo(countertwo+1)
    }

    // Expensive Function

    // const isEven=()=>{

    //     console.log('.........Warn')

    //     let i=0;
    //     while(i<20000000) i++;

    //     // return true values

    //     return counterone%2===0



    // }




   const isEven = useMemo(() => {

    console.warn('......warn')

    return counterone%2===0







   }, [counterone])




  return (
    <div>
    


    <button onClick={(e)=>handleCounter1(e)} > Counter 1    value:{counterone} </button>



    <div>
    <p>Check Even Odd</p>

    {isEven  ? 'Even' : 'Odd'}


    
    </div>

    <button onClick={(e)=>handleCounter2(e)} > Counter 2     value:{countertwo} </button>
    
    
    
    </div>
  )
}

export default UseMemo4