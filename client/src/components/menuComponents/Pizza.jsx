function Pizza () {
  return (
    <article className=' border border-green-600'>
      <h4 className='text-xl text-white'>Nuestra Pizzas de Masa casera a la piedra</h4>
      <div className=' mt-5'>
        <ul className='ml-11 list-disc grid grid-cols-2 [&>li]:text-white'>
          <li>Muzzarella</li>
          <li>Especial</li>
          <li>Especial con anchoas</li>
          <li>Especial con huevo</li>
          <li>Especial napolitana</li>
          <li>Roquefort</li>
          <li>Fugazza</li>
          <li>Especial palmitos</li>
          <li>Especial champignon</li>
          <li>Especial Punto fragueiro</li>
          <li>Ananá</li>
          <li>4 quesos</li>
          <li>Rúcula</li>
          <li>Calabresa</li>
        </ul>
      </div>
    </article>
  )
}

export default Pizza
