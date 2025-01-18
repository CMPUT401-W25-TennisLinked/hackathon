
import './App.css';
import JobMenu from './layout/JobMenu'
import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './layout/Resume';

function App() {
  return (<div className='overflow-hidden'>
    <NavBar />
    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold font-sans tracking-tight text-gray-900">Applied </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
   
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
