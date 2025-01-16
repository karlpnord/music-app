import Callback from './pages/Callback';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/callback' element={<Layout />}>
        <Route index element={<Callback />} />
      </Route>
    </Routes>
  );
};

export default App;