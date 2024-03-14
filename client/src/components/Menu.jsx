function Menu () {
  return (
    <>
      <section className='bg-blue-950  h-screen'>
        <h2 className='flex text-5xl justify-center text-white'>Menú</h2>
        <article className='bg-gray-900 border border-green-600 mx-96 pb-80'>
          <h3 className='text-4xl'>Pizzas</h3>
          <ul
            className='p-11 '
          >
            <li>
              <h4>Muzzarella</h4>
              <p>Queso, Jamon, Morrones</p>
            </li>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
            <li>Menu</li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default Menu
