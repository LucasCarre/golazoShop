import { useState } from "react"

function Counter (){
    const [counter, setCounter] = useState(0)
    const handelAdd = ()=>{
        setCounter(counter + 1)
    }
    const handleMinus = ()=>{
        if (counter === 0) return
        setCounter(counter - 1)
    }
    const handleReset = ()=>{
        setCounter(0)
    }
    return (
        <>
        <p>{counter}</p>
        <button onClick={handleMinus}>-</button>
        <button onClick={handelAdd}>+</button>
        <button onClick={handleReset}>reset</button>
        </>
    )
}

export default Counter