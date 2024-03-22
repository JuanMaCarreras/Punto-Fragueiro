import Pizza from "./menu components/Pizza"

function Menu () {
  return (
    <>
      <section className='flex  justify-start bg-menuBackground h-screen py-28 px-11'>
        <aside className='border border-red-500 '>
          <nav className='px-10 py-8 '>
            <ul className='text-white py-8 [&>li]:text-3xl [&>li]:pb-5 '>
              <li>Pizzas</li>
              <li>Hamburguesa</li>
              <li>Lomitos</li>
              <li>Empanadas</li>
              <li>Sandwich</li>
            </ul>
          </nav>
        </aside>
        <div className='w-full ml-32 border border-red-600'>
          <Pizza />
        </div>
      </section>
    </>
  )
}

export default Menu
