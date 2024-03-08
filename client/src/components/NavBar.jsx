import Logo from '../assets/logo.png'

function NavBar () {
  return (
    <>
      <header className='flex items-center fixed top-0 w-full justify-between z-40 text-white bg-zinc-900'>
        <div className='pr-11'>
          <img
            className='h-20 w-20'
            src={Logo}
            alt='logo'
          />
        </div>

        <nav className=''>
          <ul className='flex  text-white space-x-6 '>
            <li>Inicio</li>
            <li>Menú</li>
            <li>Ubicación</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
