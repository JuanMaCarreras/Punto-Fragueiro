import Logo from '../assets/logo.png'

function NavBar () {
  return (
    <>
      <header className='flex items-center fixed justify-between px-11 top-0 w-full  text-white bg-zinc-900'>
        <div className=''>
          <img
            className='h-20 w-20'
            src={Logo}
            alt='logo'
          />
        </div>

        <nav className='mr-[-50px]'>
          <ul className='flex  text-white space-x-6 '>
            <li>Inicio</li>
            <li>Menú</li>
            <li>Ubicación</li>
          </ul>
        </nav>

        <nav className=''>
          <ul className='flex   text-white space-x-6 '>
            <li>Horarios</li>
            <li>WhatsApp</li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default NavBar
