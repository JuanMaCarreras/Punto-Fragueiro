import Api from '../../api/menuApi'

function MenuList ({ categoryId }) {
  const categoryData = Api.find(item => item.id === categoryId)

  return (
    <>
      {categoryData && (
        <article className=' border border-green-600 my-11'>
          <h4 className=' flex justify-center text-3xl pb-8 text-white'>{categoryData.title}</h4>
          <p className='text-white'>{categoryData.subTitle}</p>
          <div className=' mt-5'>
            <ul className='ml-11 list-disc grid grid-cols-2 [&>li]:text-white'>
              {
              categoryData.list.map(item => (
                <li key={item}>{item}</li>
              ))
              }
            </ul>
          </div>
        </article>
      )}
    </>
  )
}

export default MenuList
