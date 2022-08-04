import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
