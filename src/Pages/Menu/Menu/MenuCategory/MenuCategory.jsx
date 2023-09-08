import Covered from "../../../Shared/Covered/Covered"
import MenuItems from "../../../Shared/MenuItems/MenuItems"


const MenuCategory = ({items, title, img}) => {
  return (
    <div className="pt-12">
      {
        title && <Covered img={img} title={title}></Covered>
      }

<div className="grid md:grid-cols-2 gap-10 my-16">
{
    items.map(item=><MenuItems
    key={item._id}
    item={item}
    >
    
    </MenuItems>)
}

</div>
    </div>
  )
}

export default MenuCategory