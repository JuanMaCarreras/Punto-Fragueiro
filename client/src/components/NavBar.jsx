function NavBar () {
  return (
    <>
      <header className='flex justify-between items-center bg-zinc-900 top-0 w-full'>
        <div>
          <img
            className='h-24 w-24'
            src='https://www.pizzascordobapuntofragueiro.com.ar/imagenes/logo3sinfondo.png'
            alt='logo'
          />
        </div>
        <nav>
          <ul className='flex  text-white space-x-6 pl-10'>
            <li>Inicio</li>
            <li>Menu</li>
            <li>Ubicación</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
