import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail'
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';


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
            <ServiceDetail></ServiceDetail>
          </RequiredAuth>
        } />
        </Routes>
    </div>
  );
}

export default App;
