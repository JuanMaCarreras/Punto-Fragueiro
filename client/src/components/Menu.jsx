function Menu () {
  return (
    <>
      <section className='flex  bg-menuBackground h-screen py-28 px-11'>
        <aside className='border border-red-500 mr-8'>
          <nav className='pl-6 pr-11 py-8'>
            <ul className='text-white'>
              <li>Pizzas</li>
              <li>Hamburguesa</li>
              <li>Lomitos</li>
              <li>Empanadas</li>
              <li>Sandwich</li>
            </ul>
          </nav>
        </aside>

        <article className='flex px-26 py-11 border border-blue-700 flex justify-center items-center'>
          <h1 className='text-green-400'>Carta</h1>
        </article>

      </section>
    </>
  )
}

export default Menu
