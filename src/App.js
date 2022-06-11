import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navbar';
import {BrowserRouter , HashRouter , Routes , Route} from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  const home_url="/";

  return (
    <div className="App">
    <HashRouter>
    <ToastContainer />  
    <Navbar />  {/* this will help to show the toast containers*/}
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route exact path={home_url} element={<Home />} />

      <Route exact path='/add' element={<Add />} />
      <Route exact path='/edit/:id' element={<Edit />} />
    </Routes>
    </HashRouter>
    </div>
   
  );
}

export default App;
