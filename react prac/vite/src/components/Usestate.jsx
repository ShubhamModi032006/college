import { useState } from "react";

function Usestate(){
    let [count, setCount] = useState(0);
    const [name,setName] = useState("");

    function increment (){
        setCount(count + 1);
    }
    function decrement (){
        setCount(count - 1);
    }
    function reset (){
        setCount(0);
    }

    // function handleChange(e){
    //     console.log(e);
    //     setName(e.target.value);
    //     console.log(name);
    // }


    function increseby3 (){
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={increseby3}>Increment by 3</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
            <br />
            <br />
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
            <h1>Your Name is: {name}</h1>
        </div>
    )
}

export default Usestate;