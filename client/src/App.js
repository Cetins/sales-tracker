import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Home from './containers/Home';
import Sales from './containers/Sales';
import MyShop from './containers/MyShop';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/HomeContainer" />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/myshop'element={<MyShop/>} />
          <Route exact path='/sales' element={<Sales />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
