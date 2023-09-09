import { Link } from "react-router-dom";
import Covered from "../../../Shared/Covered/Covered";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-12">
      {title && <Covered img={img} title={title}></Covered>}

      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4  mt-4 text-green-500">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
