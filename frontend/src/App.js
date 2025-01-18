
import './App.css';
import JobMenu from './layout/JobMenu'
import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './layout/Resume';

function App() {
  return (<div className='overflow-hidden'>
    <NavBar />

    <Router>
      <Routes>
        <Route index path="/applied" element={<JobMenu />}></Route>
        <Route path="/messages"></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </Router>


  </div>
  );
}

export default App;
