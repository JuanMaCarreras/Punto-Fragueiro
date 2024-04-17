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
            {
                categoryData && categoryData.items.map((item, index) => (
                  <dl
                    key={item}
                    className='ml-11 list-disc grid grid-cols-2 gap-y-2 [&>li]:text-white'
                  >
                    <dt>{index.name}</dt>
                    <dd>{index.ingredients}</dd>
                  </dl>
                ))
              }
          </div>
        </article>
      )}
    </>
  )
}

export default MenuList
