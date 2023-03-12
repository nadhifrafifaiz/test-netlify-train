import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import HOC from './pages/HOC';

function App() {
  return (
    <Routes>
      <Route path='/hoc' element={<HOC />} />
    </Routes>
  );
}

export default App;
