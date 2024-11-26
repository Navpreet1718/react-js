import NavBar from './component/Navbar/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from './component/Footer';
import Signup from './component/Signup';
import Private from './component/Private';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';


function App() {
  return (
    <div className="App">
      <h1>hey there</h1>
      <BrowserRouter>
     <NavBar />
  <Routes>
    
    <Route element={<Private />}>
    <Route path="/" element={<ProductList />}/>
    <Route path="/add" element={<AddProduct />}/>
    <Route path="/update" element={<h1> update product component</h1>}/>
    <Route path="/logout" element={<h1> logout component</h1>}/>
    <Route path="/profile" element={<h1> profile component</h1>}/>
    </Route>

    <Route path="/signup" element={<Signup />}/>
    <Route path="login" element={<Login />}/>
  </Routes>
  </BrowserRouter>
  <Footer />
    </div>
  );
}

export default App;
