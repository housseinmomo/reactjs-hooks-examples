import { useReducer } from 'react'


const initState = {count: 0, userInput: "", color: false}

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newInput",
  TOOGLE_COLOR: "tgColor"
}

 const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return {...state, count: state.count + 1}
    case "decrement":
      return {...state, count: state.count - 1}
    case "newInput":
      return {...state, userInput: action.payload} // {type: "", payload: ""}
    case "tgColor":
      return {...state, color: !state.color}
    default: 
    throw new Error()
  }
 }

function App() {
  
  const [state, dispatch] = useReducer(reducer, initState)
  console.log(state)


  return (
    <>
      <h1>Test 01: UseReducer</h1>
      <main className='App' style={{color: state.color ? "white" : "red"}}>
        <input
          type="text"
          value={state.userInput}
          onChange={
            (e) => dispatch({type: ACTION.NEW_USER_INPUT, payload: e.target.value})
          }
        />

        <br /><br />

        <p>{state.count}</p>

        <section>
          <button onClick={() => dispatch({type: ACTION.INCREMENT})}>+</button>
          <button onClick={() => dispatch({type: ACTION.DECREMENT})}>-</button>
          <button onClick={() => dispatch({type: ACTION.TOOGLE_COLOR})}>toggle color</button>
        </section>

        <br /><br />
        {state.userInput}
      </main>
    </>
  )
}

export default App
