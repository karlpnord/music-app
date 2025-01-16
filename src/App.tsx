import Callback from './pages/Callback';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login /> } />
      <Route path='/callback' element={<Callback />} />
    </Routes>
  );
};

export default App;