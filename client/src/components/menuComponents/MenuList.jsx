import Api from "../../api/menuApi"

function MenuList ({ categoryId }) {

  const categoryData = Api.find(item => item.id === categoryId);


  return (
    <>
    {categoryData && ( 
      <div>
        <h4>{categoryData.title}</h4>
      </div>
    )}
  </>
  )
}

export default MenuList
