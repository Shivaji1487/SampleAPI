
import './App.css';
import Nav from './components/Nav';

import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <h1 className="Heading">E-Dashboard</h1>
      <Nav />
      <Routes>
      <Route element={<PrivateComponent />}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>

      <Route path="/update/:id" element={<UpdateProduct/>}/>
      
      <Route path="/profile" element={<h3>View Profile</h3>}/>
      <Route path="/logout" element={<h3> Logout from here</h3>}/>
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
