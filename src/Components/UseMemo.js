// useMemo hook is used to optimize the performace of our application

// useMemo hook returns a memozied value

// its take a callback function and a dependency arr 
// If dependency does not changed than it returns cached value

// whatever memozied value a function return , stored in cache 
//and next time  if same request come than it returns cached value insted of doing expensive calculation

// avoid Recalculation


import React, { useMemo, useState } from 'react'

function UseMemo() {



    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const handleCounter1=(e)=>{
        setCounterOne(counterOne+1)

    }

    const handleCounter2=(e)=>{
        setCounterTwo(counterTwo+1)

    }


    const isEven=useMemo(() =>{

        console.warn('......warn')

        return counterOne%2===0

    } ,[counterOne])





    // const isEven=()=>{

    //     console.warn('...........')

    //     let i=0;
    //     while(i<2000) i++;
    //     return counterOne%2===0
    // }

    




  return (
    <div>
    
    UseMemo

    <button onClick={(e)=> handleCounter1(e)}> 1Counter{counterOne}</button>

    <span>{isEven? 'even':'odd'}</span>

    <button onClick={(e)=> handleCounter2(e)}>2Counter{counterTwo}</button>
    
    
    
    
    </div>
  )
}

export default UseMemo