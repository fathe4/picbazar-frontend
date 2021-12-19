import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Login from './pages/login/login';
import { ToastContainer } from 'react-toastify';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useSelector } from 'react-redux';
import AddProduct from './pages/addProduct/addProduct';
import ManageProducts from './pages/ManageProducts/ManageProducts';


function App() {
  const user = useSelector(state => state.user)
  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={<PrivateRoute isAuthenticated={user}><Cart /></PrivateRoute>} />

          <Route path="/dashboard" element={<PrivateRoute isAuthenticated={user}><Dashboard /></PrivateRoute>} >

            <Route path="myOrders" element={<PrivateRoute isAuthenticated={user}><MyOrders></MyOrders></PrivateRoute>}></Route>
            <Route path="addProduct" element={<PrivateRoute isAuthenticated={user}><AddProduct></AddProduct></PrivateRoute>}>
            </Route>

            <Route path="products" element={<PrivateRoute isAuthenticated={user}><ManageProducts></ManageProducts></PrivateRoute>}></Route>
          </Route>

          {/* <Route path="/cart"  element={<Cart />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
