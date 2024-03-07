import Logo from '../assets/logo.png'

function NavBar () {
  return (
    <>
      <header className='fixed w-screen'>
        <nav className='flex justify-center items-center bg-zinc-900 top-0 '>
          <div className='pr-11'>
            <img
              className='h-20 w-20'
              src={Logo}
              alt='logo'
            />
          </div>

          <ul className='flex  text-white space-x-6 '>
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
