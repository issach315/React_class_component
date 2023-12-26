import React,{useState} from 'react'

function UseStateObject() {
  
    let student={
        firstName:"",
        lastName:""
    }
    const [preson,setPresonInfo] =useState(student);

  return (
       <form>
            <input type='text'
             value={preson.firstName}
              onChange={event=> setPresonInfo({...preson,firstName:event.target.value})}/>

         

            <input type='text'
             value={preson.lastName} 
             onChange={event=> setPresonInfo({...preson,lastName:event.target.value})}/>
             <>
                <h1>My first Name is : {preson.firstName}</h1>
                <h1>My first Name is : {preson.lastName}</h1>
                <>
                    <h2>{JSON.stringify(preson)}</h2>
                </>
             </>
       </form>
  )
}

export default UseStateObject