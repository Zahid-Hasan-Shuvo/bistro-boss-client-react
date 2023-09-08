import { Helmet } from "react-helmet-async";
import Covered from "../../Shared/Covered/Covered";
import menuImg from "../../../assets/menu/banner3.jpg"


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Covered img={menuImg} title="Our Menu"></Covered>
     
    </div>
  );
};

export default Menu;
