import { useState } from 'react'
import Api from '../api/menuApi'
import Pizza from "./menuComponents/Pizza"
import MenuList from './menuComponents/MenuList'

function Menu () {

    const [idList, setIdList] = useState('Pizza')

    console.log(idList)
  return (
    <>
      <section className='flex  justify-start bg-menuBackground h-screen py-28 px-16'>
        <aside className='border border-red-500 '>
          <nav className='px-10 py-8 '>
            <ul className='text-white py-8 [&>li]:text-3xl [&>li]:pb-5 '>
              {/* <li>Pizzas</li>
              <li>Hamburguesa</li>
              <li>Lomitos</li>
              <li>Empanadas</li>
              <li>Sandwich</li> */}
              {/* {
                Api.map(index => (
                  <li key={index.id}>
                    <button >{index.id}</button>
                  </li>
                ))
              } */}
            </ul>
          </nav>
        </aside>
        <div className='w-full ml-24 border border-red-600'>
          {/* <Pizza /> */}
          <MenuList categoryData={idList}/>
        </div>
      </section>
    </>
  )
}

export default Menu
