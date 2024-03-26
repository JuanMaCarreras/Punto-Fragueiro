import Logo from '../assets/logo.png'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineAccessTime } from "react-icons/md"

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
            <li className='flex'>
            <MdOutlineAccessTime 
             className=' h-6 w-6 mr-1'
            /> Horarios
            </li>
            <li>
              <a href='https://api.whatsapp.com/send?phone=543514086715&amp;text=HOLA!%20quiero%20hacer%20un%20pedido' title='Mensaje de whatsapp' class='btn ' target='_blank' rel='noreferrer'><i class='fab fa-whatsapp' />
                <BsWhatsapp
                  className=' h-6 w-6 hover:text-green-400 transition-colors duration-200 delay-200'
                />
              </a>
            </li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default NavBar
