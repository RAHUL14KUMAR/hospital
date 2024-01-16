import './App.css';
import Contact from './component2/Contact/Contact';
import Layout from './component2/Layout/Layout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserDashboard from './components/pages/dashboard/userDashBoard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserDashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/play' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
