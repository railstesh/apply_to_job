import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import AvailableJobs from './components/availableJobs/AvailableJobs';
import ApplyJobForm from './components/applyJob/ApplyJobForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<AvailableJobs />} />
        <Route exact path="/applyjob" element={<ApplyJobForm />} />
	    </Routes>
    </Router>
  );
}

export default App;
