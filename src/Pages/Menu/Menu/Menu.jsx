import { Helmet } from "react-helmet-async";
import Covered from "../../Shared/Covered/Covered";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Covered img={menuImg} title="Our Menu"></Covered>
      <PopularMenu></PopularMenu>
      <Covered img={menuImg} title="Our Menu"></Covered>
      <PopularMenu></PopularMenu>
      <Covered img={menuImg} title="Our Menu"></Covered>
      <PopularMenu></PopularMenu>
      <Covered img={menuImg} title="Our Menu"></Covered>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
