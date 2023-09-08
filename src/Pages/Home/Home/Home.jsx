
import { Helmet } from 'react-helmet-async'
import SinglePhoto from '../../SinglePhoto/SinglePhoto'
import Bannar from '../Bannar/Bannar'
import Category from '../Category/Category'
import ChefRecomondation from '../ChefRecomondation/ChefRecomondation'
import Featured from '../Featured/Featured'
import PopularMenu from '../PopularMenu/PopularMenu'
import Testimonial from '../Testimonial/Testimonial'
import Contact from './Contact/Contact'




const Home = () => {
  return (
    <div>
        <Helmet>
        <title> Bistro Boss | Home </title>
      </Helmet>
        <Bannar></Bannar>
        <Category></Category>
        <SinglePhoto></SinglePhoto>
        <PopularMenu></PopularMenu>
        <Contact></Contact>
        <ChefRecomondation></ChefRecomondation>
        <Featured></Featured>
        <Testimonial></Testimonial>
        
        </div>
  )
}

export default Home