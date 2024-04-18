import Api from '../../api/menuApi'

function MenuList ({ categoryId }) {
  const categoryData = Api.find(item => item.id === categoryId)

  return (
    <>
      {categoryData && (
        <article className=''>
          <h4 className=' text-3xl text-orange pb-4 flex items-center'>
            {categoryData.title}
            <div className=' mx-4 mt-2 flex-grow border-t-2 border-orange' />
          </h4>

          {
          categoryData.subTitle &&
            <p className='text-white ml-2'>{categoryData.subTitle}</p>
          }

          <div className='mt-11'>
            <dl className=' list-disc grid grid-cols-2 gap-y-2'>
              {
                categoryData && categoryData.items.map((item, index) => (
                  <div key={index}>
                    <dt>{item.name}</dt>
                    <dd>{item.ingredients}</dd>
                  </div>
                ))
                }
            </dl>
          </div>
        </article>
      )}
    </>
  )
}

export default MenuList
