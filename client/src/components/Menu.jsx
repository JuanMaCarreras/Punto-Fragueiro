import { useState } from 'react'
import Api from '../api/menuApi'
import MenuList from './menuComponents/MenuList'

function Menu () {
  const [idList, setIdList] = useState()

  const handlerItemClick = (id) => {
    setIdList(id)
    console.log(id)
  }

  return (
    <>
      <section className='flex  justify-start bg-menuBackground h-screen py-28 px-16'>
        <aside className=' '>
          <nav className='px-10 py-8 '>
            <ul className='flex-col justify-start text-white py-8  [&>li]:text-3xl [&>li]:pb-5 '>
              {
                Api.map(item => (
                  <li key={item.id}>
                    <button onClick={() => handlerItemClick(item.id)}>{item.id}</button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </aside>
        <div className='w-full ml-24 border border-red-600'>

          <MenuList categoryId={idList} />

        </div>
      </section>
    </>
  )
}

export default Menu
