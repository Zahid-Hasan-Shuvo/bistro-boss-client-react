
import SinglePhoto from '../../SinglePhoto/SinglePhoto'
import Bannar from '../Bannar/Bannar'
import Category from '../Category/Category'
import ChefRecomondation from '../ChefRecomondation/ChefRecomondation'
import Featured from '../Featured/Featured'
import PopularMenu from '../PopularMenu/PopularMenu'



const Home = () => {
  return (
    <div>
        
        <Bannar></Bannar>
        <Category></Category>
        <SinglePhoto></SinglePhoto>
        <PopularMenu></PopularMenu>
        <ChefRecomondation></ChefRecomondation>
        <Featured></Featured>
        
        </div>
  )
}

export default Home