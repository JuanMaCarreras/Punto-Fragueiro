import NavBar from './NavBar'

function Home () {
  return (
    <>
      <NavBar />

      <main className='bg-blue-800 flex flex-col justify-center pl-11 h-96 '>
        <h1 className='text-5xl'>Pizzería Punto Fragueiro</h1>
        <p>Un lugar con buena onda</p>
      </main>

    </>
  )
}

export default Home
