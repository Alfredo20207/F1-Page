import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import History from './pages/history';
import Teams from './pages/teams';
import Circuits from './pages/circuits';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/circuits" element={<Circuits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;