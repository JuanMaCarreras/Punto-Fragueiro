import NavBar from './NavBar'

function Home () {
  return (
    <>
      <NavBar />

      <main className='flex flex-col justify-center pl-11 bg-cover bg-center h-screen bg-mainImg'>
        <h1 className='text-5xl'>Pizzería Punto Fragueiro</h1>
        <p className='text-white text-xl'>Un lugar con buena onda</p>
      </main>

    </>
  )
}

export default Home
