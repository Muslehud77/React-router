
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Footer from './Footer/Footer';



const Home = () => {
  const navigation = useNavigation()
  const location = useLocation()

    return (
      <div className="">
        <Header location={location}></Header>

        <div className=" relative">
          {
            navigation.state === 'loading' ? <div className="flex justify-center my-52 items-center"><progress className="progress w-56"></progress></div> : <Outlet></Outlet>
          }
          
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Home;