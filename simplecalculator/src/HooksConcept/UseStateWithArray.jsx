import React , {useState}from 'react'

function UseStateWithArray() {
    let [items,setItems]    =useState([]);

    function addItem(){
        return(
            setItems([
                ...items,
                {
                    id:items.length,
                    value:Math.floor(Math.random()*100)+1 
                }
            ])
        )
    }

  return (
    <div>
    <button onClick={addItem}>ADD-ITEM</button>
    <ul>
        {items.map(item=>(
            <li key={item.id}>{item.value}</li>
        ))}
    </ul>

    </div>
  )
}

export default UseStateWithArray