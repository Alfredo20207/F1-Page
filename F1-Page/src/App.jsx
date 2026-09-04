import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navbar from './components/navbar';
//import Home from './pages/Home';
//import History from './pages/History';
//import Teams from './pages/Teams';
//import Circuits from './pages/Circuits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-zinc-100 font-sans">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/circuits" element={<Circuits />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;