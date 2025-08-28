import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import men_banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from "./assets/kids_banner.jpg"
import LoginSignup from './Pages/LoginSignup';
import About from './Components/About';
import AddressForm from './Components/AddressForm';

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
         <Route path='/men' element={<Shopcategory banner={'https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'} category="men"/>}/> 
         <Route path='/women' element={<Shopcategory banner={'https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg'} category="women"/>}/> 
         <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/> 
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/AddressForm' element={<AddressForm/>}/>
        {/* <Route path='/shopcategory' element={<Shopcategory />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
