
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PropState from './Components/PropState';
import Form from './Components/Form';
import HookEffect from './Components/HookEffect';
import HookState from './Components/HookState';
import Reference from './Components/Reference';
import Home from './Components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/propstate" element={<PropState />} />
      <Route path="/form" element={<Form/>} />
      <Route path="/effect" element={<HookEffect/>} />
      <Route path="/state" element={<HookState/>} />
      <Route path="/ref" element={<Reference/>} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
