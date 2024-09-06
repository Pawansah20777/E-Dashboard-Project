import './App.css';
import Navbar from './components/Navbar';
import Footer from'./components/Footer';
import SignUp from'./components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';

import PrivateComponent from'./components/PrivateComponent';
import{BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route path="/" element={<PrivateComponent/>}>
          <Route path="/" element={<h1>Product Listing Component</h1>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update" element={<h1>update Product Component</h1>}/>
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
