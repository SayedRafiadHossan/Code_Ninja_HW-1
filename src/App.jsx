import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <div className="count">{count}</div>
        <div>
          <div className="maintain">
            <button
              id="decrease"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Decrease
            </button>
            <button
              id="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increase
            </button>
          </div>
        </div>
      </div>
  )
}

export default App
