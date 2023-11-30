import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/index.css";

// Import components 
import { AppHeader } from './components/AppHeader'
import { AppFooter } from './components/AppFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='WebPage'>
        <AppHeader />
        <main className='vh100-header-footer flex items-center justify-center'>
          <div className="card flex items-center justify-center h-72 w-9/12 md:w-6/12 bg-black rounded-2xl text-slate-50">
            <h2 className='text-[50px]'>{count}</h2>
          </div>
        </main>
        <AppFooter />
      </div>
    </>
  )
}

export default App
