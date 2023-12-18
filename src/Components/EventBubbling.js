import React from 'react'

function EventBubbling() {




    // const grandParent = document.getElementById("grandparent");
    // const parent = document.getElementById("parent");
    // const child = document.getElementById("child");

    // grandParent.addEventListener("click", (e) => {
    //     console.log("GrandParent");
    // }, { capture: false });
    // parent.addEventListener("click", (e) => {
    //     console.log("Parent");
    // }, { capture: false });
    // child.addEventListener("click", (e) => {
    //     console.log("Child");
    // }, { capture: false });






      
    function handleGP(e){

        console.log('gp click')

    }


    

    function handleParent(e){

        console.log('parent click')

    }


    


    function handleChild(e){

        e.stopPropagation()

        console.log('child click')

    }





  return (

    
    <div  style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    
    <h1>

    EventBubbling
    
    </h1>

    <div  id='grandparent'  style={{backgroundColor:'green', width:'300px', height:'300px'}} onClick={(e)=>handleGP(e)}  >
    
    Grad Parent

    <div id='parent' style={{backgroundColor:'blue', width:'200px', height:'200px'}} onClick={(e)=>handleParent(e)}  >
    
    Parent

    <div id='child' style={{backgroundColor:'red', width:'100px', height:'100px'}} onClick={(e)=>handleChild(e)} >
    Child
    </div>
    
    </div>
    
    
    
    </div>




    
    
    </div>
  )
}

export default EventBubbling