
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/LoginFile/Login';
import Register from './components/RegisterFile/Register';
import RequireAuth from './components/RequerAuthFile/RequireAuth';
import Shipment from './components/ShipNentFile/Shipment';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>

        <Route path='/orders' element={
          // <RequireAuth>
          <Orders></Orders>
          // </RequireAuth>
        }></Route>

        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
