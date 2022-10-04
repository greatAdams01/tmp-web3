import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <nav>
          <img src="/techrity_web_logo.svg" alt="" />
        </nav>
      </header>
        <div className='container'>
            <form>
              <input type="text" placeholder='Receiver Address' />
              <input type="text" placeholder='Amount' /> <br />
              <input className='submit' type="submit" value="Send" />
            </form>
        </div>
    </div>
  )
}

export default App
