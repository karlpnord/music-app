import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/callback' element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;