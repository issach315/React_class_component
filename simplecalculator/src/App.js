import React, { useState } from 'react';// multiple imports
// importing the named exports use syntax { useState}

const App = () => {
  const [inputValues, setInputValues] = useState({
    number_1: 20,
    number_2: 0,
  })

  /* 

  we can use anonmus function or arrow function 

  in useState(initialValue) we need to provide intial value to useState
  
  const is because of im not changing the value entered by user

  


  */

  const [result, setResult] = useState({
    addValue: 0,
    subValue: 0,
    multValue: 0,
    divValue: 0,
  });

  const changehandulaer = (e, field) => {
    console.log(e);
    let obj = JSON.parse(JSON.stringify(inputValues));
    if (field == "1") {
      obj.number_1 = e.target.value;
      setInputValues(obj);

    } else {
      obj.number_2 = e.target.value;
      setInputValues(obj);
    }
  }

  const viewHandular = (operationType) => {
    let obj = JSON.parse(JSON.stringify(result));
    switch (operationType) {
      case "add":
        setResult((prev) => {
          prev.addValue = +inputValues.number_1 + +inputValues.number_2;
        })
        console.log(obj);
        // obj.addValue = +inputValues.number_1 + +inputValues.number_2;
        setResult(obj);
        break;
      case "Sub":
        obj.subValue = +inputValues.number_1 - +inputValues.number_2;
        setResult(obj);
        break;
      case "Mul":
        obj.multValue = +inputValues.number_1 * +inputValues.number_2;
        setResult(obj);
        break;
      case "Div":
        obj.divValue = +inputValues.number_1 / +inputValues.number_2;
        setResult(obj);
        break;

      default:
        break;
    }
  }
  return (
    <>
      <div>
        <input type='number' onChange={e => changehandulaer(e, "1")} value={inputValues.number_1} />
        <input type='number' onChange={e => changehandulaer(e, "2")} value={inputValues.number_2} />
        <button onClick={() => viewHandular("add")}>Add</button>
        <button onClick={() => viewHandular("Sub")}>Sub</button>
        <button onClick={() => viewHandular("Mul")}>Mul</button>
        <button onClick={() => viewHandular("Div")}>Div</button>
      </div>
      <div>
        add : {result.addValue}
        <br />
        sub :{result.subValue}
        <br />
         mul :{result.multValue}
        <br /> 
        div :{result.divValue}
      </div>
    </>
  )
}

export default App;



