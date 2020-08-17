import React from 'react';
import data from './data.js';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".nav-sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".nav-sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button className="nav-btn" onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/" >myEcom</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Signin</a>
            </div>
        </header>

        <aside className="nav-sidebar">
            <h3>Shopping Categories</h3>
            <button className="nav-sidebar-close-btn" onClick={closeMenu}>x</button>
            <ul>
                <li><a href="index.html">T-shirt</a></li>
                <li><a href="index.html">Hoddies</a></li>
            </ul>
        </aside>

        <main className="main">
            <div className="content">
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>

            </div>
        </main>

        <footer className="footer">All right reserved.</footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
