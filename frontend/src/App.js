
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/PaymentSuccess' element={<PaymentPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
