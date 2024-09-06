import './App.css';
import Navbar from './components/Navbar';
import Footer from'./components/Footer';
import SignUp from'./components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


import PrivateComponent from'./components/PrivateComponent';
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route path="/" element={<PrivateComponent/>}>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1> logout Product Component</h1>}/>
          <Route path="/profile" element={<h1>profile Product Component</h1>}/>
          </Route>
          
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
