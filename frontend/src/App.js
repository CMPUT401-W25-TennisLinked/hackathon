
import './App.css';
import JobMenu from './layout/JobMenu'
import NavBar from './layout/NavBar';

function App() {
  return (<div>
    <NavBar />
    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold font-sans tracking-tight text-gray-900">Applied </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
   
    <JobMenu />
    
  </div>
  );
}

export default App;
