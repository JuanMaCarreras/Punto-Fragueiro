function NavBar () {
  return (
    <>
      <nav className='relative'>
        <header className='flex justify-center items-center bg-zinc-900 top-0 w-full'>
          <div className=''>
            <img
              className='h-24 w-24'
              src='https://www.pizzascordobapuntofragueiro.com.ar/imagenes/logo3sinfondo.png'
              alt='logo'
            />
          </div>
          <nav className=''>
            <ul className='flex  text-white space-x-6 pl-10'>
              <li>Inicio</li>
              <li>Menu</li>
              <li>Ubicación</li>
            </ul>
          </nav>
        </header>
      </nav>
    </>
  )
}

export default NavBar
