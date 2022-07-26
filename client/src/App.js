import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link } from "react-router-dom"
import HomeContainer from './containers/HomeContainer';
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
          <Route exact path='/' element={<HomeContainer />} />
          {/* <Route exact path='/quiz' element={<QuizContainer />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
