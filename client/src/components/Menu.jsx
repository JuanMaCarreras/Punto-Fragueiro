import { useState } from 'react'
import Api from '../api/menuApi'
import MenuList from './menuComponents/MenuList'

function Menu () {
  const [idList, setIdList] = useState('Pizza')

  const handlerItemClick = (id) => {
    setIdList(id)
  }

  return (
    <>
      <section
        id='Menu'
        className='flex  justify-start bg-menuBackground h-screen py-32 px-11'
      >
        <aside className='border-l-[1px] border-r-[1px]   '>
          <nav className='pl-16 pr-28 py-8 '>
            <ul className='flex-col justify-start text-white py-8  [&>li]:text-3xl [&>li]:pb-5 '>
              {
                Api.map((item, index) => (
                  <li key={index}>
                    <button
                      className={idList === item.id ? 'text-orange translate-x-3' : 'text-white  transition delay-100 hover:translate-x-3 hover:text-orange'}
                      onClick={() => handlerItemClick(item.id)}
                    >{item.id}
                    </button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </aside>
        <div className='w-full ml-20  '>

          <MenuList categoryId={idList} />

        </div>
      </section>
    </>
  )
}

export default Menu
