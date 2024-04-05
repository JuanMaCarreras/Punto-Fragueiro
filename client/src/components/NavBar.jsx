import Logo from '../assets/logo.png'
import { BsWhatsapp } from 'react-icons/bs'
import { GiKnifeFork } from 'react-icons/gi'
import { RiHome2Line } from 'react-icons/ri'
import { GoLocation } from 'react-icons/go'
import { IoMdTime } from 'react-icons/io'

function NavBar () {
  return (
    <>
      <header className='flex items-center fixed justify-between px-11 top-0 w-full  text-white bg-zinc-900'>
        <div className=''>
          <img
            className='h-[93px] w-[93px]'
            src={Logo}
            alt='logo'
          />
        </div>

        <nav className='mr-[-50px]'>
          <ul className='flex  text-white space-x-8 '>
            <li className='flex items-center font-semibold'>
              <RiHome2Line className=' h-5 w-5 mr-1' />
              Inicio
            </li>
            <li className='flex items-center  font-semibold'>
              <GiKnifeFork className=' h-4 w-4 mr-1' />
              Menú
            </li>
            <li className='flex items-center  font-semibold'>
              <GoLocation className=' h-5 w-5 mr-1 mb-1' />
              Ubicación
            </li>
          </ul>
        </nav>

        <nav className=''>
          <ul className='flex  text-white space-x-6 '>
            <li className='flex items-center  font-semibold'>
              <IoMdTime
                className=' h-6 w-6 mr-1'
              /> Horarios
            </li>
            <li className='flex items-center'>
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
