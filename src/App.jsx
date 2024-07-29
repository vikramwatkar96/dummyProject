import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from 'react';
import Topheader from './component/topHeader/Topheader';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register';
import Input from './Input';
import './Input.css'
import './App.css'
import Navbar from './component/navbar/Navbar';
import BlogLeftSideBar from './component/blog/blogLeftSideBar';
import Profile from './pages/Profile';
import Password from './pages/Password';
import HomeProducts from './pages/HomeProducts';
import SpecialOffer from './component/specialOffers';
import BlogRightSideBar from './component/blog/blogRightSideBar';
import MainComp from './component/blog/mainComp';
import BlogDetailsForm from './component/blog/blogDetailsForm';
import BlogDetails from './component/blog/blogDetails';

const columnHeadWishlist = ["image", "product name", "price", "availaility", "action"]
function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className='body'>
      <Topheader />
      <Navbar />
      {/* <BlogLeftSideBar/> */}
      {/* <BlogRightSideBar /> */}
      {/* <MainComp /> */}
      {/* <BlogDetailsForm/> */}
      {/* <BlogDetails/> */}
      {/* <Profile /> */}
      {/* <Password />   */}
      <HomeProducts />
      {/* <SpecialOffer /> */}
    </div>
  )
}

export default App
