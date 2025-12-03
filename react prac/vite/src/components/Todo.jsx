import { useState } from "react";

function Todo(){
    // const [todos, setTodos] = useState({
    //     text :'',
    //     completed : false,
    //     priority : 'low'
    // });

    // function toggltcom(){
    //     setTodos({...todos,completed : !todos.completed});
    //     console.log(todos.completed);
    // }

    // function updatepri(newval){
    //     setTodos({...todos, priority : newval});
    //     // console.log(todos.priority);
    // }

    const [bgcolor, setBgcolor] = useState("white");

    function changebg(){
        if(bgcolor === 'white') setBgcolor("red");
        else setBgcolor("white");
    }

    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", backgroundColor : bgcolor}}>
            {/* <input type="text" value={todos.text} onChange={(e) => setTodos({...todos,text : e.target.value})} />
            <input type="checkbox" checked = {todos.completed} onChange={toggltcom} />
            <span style={{textDecoration : todos.completed ? 'line-through' : 'none'}}>{todos.text}</span>
            <select value={todos.priority} onChange={(e) => updatepri(e.target.value)}>
                <option value="low">low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select> */}
            <button onClick={changebg}>Click me</button>
        </div>
    )
}

export default Todo;