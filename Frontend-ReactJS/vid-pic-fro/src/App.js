import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFiles from './components/UploadFiles';
import FetchFiles from './components/FetchFiles';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload-files' element={<UploadFiles/>}/>
          <Route path='/get-files' element={<FetchFiles/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
