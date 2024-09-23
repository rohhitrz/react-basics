import React from "react";
import useCounter from "./counter";

const CounterComponent=()=>{
    const{count,increment,decrement,reset}=useCounter(0);

    return(
        <div>
            <div>count:{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>







        </div>
    )


    
}


export default  CounterComponent;