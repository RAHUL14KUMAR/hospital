import './App.css';
import CardDetails from './component2/Doctor/CardDetails';
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
        <Route path='/profile/:id' element={<CardDetails/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
