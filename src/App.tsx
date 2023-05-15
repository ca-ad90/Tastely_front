import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RecipeCard from './components/RecipeCard'
import MainApp from './components/MainApp'

function App() {
  const [count, setCount] = useState(0)

  const recipe = {
    name: 'TEST',
    description: 'This TEST',
    image: '',
    creator: {
      name: 'Sven Svensson',
      avatar: ''
    }
  }

  return (
    <div className="App">
      <MainApp />
      <div>
        <RecipeCard recipe={recipe} />
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
