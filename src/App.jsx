import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Investment from './pages/Investment';
import Calculators from './pages/Calculators';
import Loans from './pages/Loans';
import StockMarket from './pages/StockMarket';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/stock-market" element={<StockMarket />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
