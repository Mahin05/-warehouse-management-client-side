import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import InventoryDetail from './Pages/inventoryDetail/inventoryDetail'
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Footer from './Pages/Shared/Footer/Footer'
import AddInventory from './Pages/AddInventory/AddInventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import MyItems from './Pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';
import PageNotFound from './Pages/PageNotFound/PageNotFound'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path='/inventory/:inventoryId' element={
          <RequiredAuth>
            <InventoryDetail></InventoryDetail>
          </RequiredAuth>
        } />
        <Route path='/additem' element={
          <RequiredAuth>
            <AddInventory></AddInventory>
          </RequiredAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequiredAuth>
            <ManageInventories></ManageInventories>
          </RequiredAuth>
        }></Route>
        <Route path='/items' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>} />
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
