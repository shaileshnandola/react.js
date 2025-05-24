import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopularProducts from "./components/PopularProducts";
import Sneck from "./components/Sneck";
import Product from "./components/Product";
import Food from "./components/Food";
import Organic from "./components/Organic";
import Great from "./components/Great";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
    <Banner/>
    <Categories/>
    <PopularProducts/>
    <Sneck/>
    <Product/>
    <Food/>
    <Organic/>
    <Great/>
    <LatestNews/>
    <Footer/>
    </>
    
  );
}

export default App;
