import { useState, useEffect } from 'react';
import { DemoOne } from './components/ui/demo';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container bg-[#030303] flex items-center justify-center min-h-screen">
        <div className="loader border-t-white border-white/20"></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <DemoOne />
    </div>
  );
}

export default App;
