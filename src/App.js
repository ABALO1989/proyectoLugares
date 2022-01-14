import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './user/pages/Users';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/users' element={<Users />} />
    

    </Routes>
    </BrowserRouter>
  );
}

export default App;
