import React , {useState}from 'react'

function Counter1(){
    const initialCount =0;
    let [count,setCount]=useState(initialCount);

    function instant(){
        
        for(let i=1 ;i<=5 ;i++){

            setCount(prevCount=>prevCount+1)
        }
    }

    return(
        <>
            count: {count}
            <button onClick={()=>{setCount(prevCount =>prevCount+1)}}>increase</button>
            <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>decrease</button>
            <button onClick={instant}> Increment 5</button>
        </>
    );
}

export default Counter1;

