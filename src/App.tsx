import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row pt-5 mb-5'>
        <div className="basis-1/5">
          <h2>Tobias Tolar</h2> 
        </div>
        <div className="basis-3/5"></div>
        <div className="basis-1/5">
          <h2>Coach</h2> 
        </div>
      </div>

      <div className="flex flex-row">
        <div className="basis-1/4 ml-15">
          <img src="img/lilb.png" className="rounded-full" width="300" height="300" alt="" />
        </div>
        <div className="basis-3/4 p-20">
          <p>Jaroslav Burdys</p>
        </div>
      </div>

      <div className='flex flex-row'>
        <a href="https://github.com/birdisgoat" target="_blank">
          <svg className="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#github-icon"></use>
          </svg>
          GitHub 
        </a>
      </div>  
    </>
  )
}

export default App
