import { useState } from "react";

function Counter(){
    let [counter,setCounter] =useState(0);
function increaseCount(){
         setCounter(counter+1);
    };
function decreaseCount(){
       setCounter(counter-1);
    }

   
    return(
        
       <>
         <h3>Counter : {counter}</h3>
            <div>
                <button onClick={()=>{increaseCount()}}>+</button>
                <button onClick={()=>{decreaseCount()}}>-</button>
            </div>
       </>

    )
}

export default Counter;