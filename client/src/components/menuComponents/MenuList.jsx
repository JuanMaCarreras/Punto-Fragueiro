import Api from '../../api/menuApi'

function MenuList ({ categoryId }) {
  const categoryData = Api.find(item => item.id === categoryId)

  return (
    <>
      {categoryData && (
        <article className='my-11'>
          <h4 className='px-9 text-3xl pb-8 text-white'>{categoryData.title}</h4>
          <p className='text-white'>{categoryData.subTitle}</p>
          <div className=' mt-5'>
            <ul className='ml-11 list-disc grid grid-cols-2 gap-y-2 [&>li]:text-white'>
              {
              categoryData.list.map((item, index) => (
                <li key={index}>{item}</li>
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
