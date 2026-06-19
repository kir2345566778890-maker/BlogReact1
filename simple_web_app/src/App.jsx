import React from 'react'

const App = () => {
  const hname = "kirti"
  const sname = "srivastava"
  const [count, setCount] = React.useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button> 
        <button onClick={() => {if(count>0)setCount(count - 1)}}>Decrement</button> <p>{count}</p>
        {/* <h2>{count>0?count:0}</h2> */}
        
        <p>{hname} {sname}</p>
      </div>
    </>
  )
}

export default App
