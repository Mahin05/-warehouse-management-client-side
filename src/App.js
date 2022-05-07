import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import InventoryDetail from './Pages/inventoryDetail/inventoryDetail'
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Footer from './Pages/Shared/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path='/inventory/:inventoryId' element={
          <RequiredAuth>
            <InventoryDetail></InventoryDetail>
          </RequiredAuth>
        } />
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
