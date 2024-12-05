
import './App.css'
import Hero from './Components/Hero'
import NavbarArea from './Components/NavbarArea'

function App() {

  return (
    <>
    <main className='overflow-x-hidden'>
    <NavbarArea/>
    <div className='w-full max-w-[1440px] px-2 md:px-10 lg:px-20 xl:px-24 mx-auto'>
    <Hero/>
    </div>

    </main>
    </>
  )
}

export default App
