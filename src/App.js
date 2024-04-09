import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feednews from './Pages/Feed/Feednews';
import Signup from './Pages/Auth/Signup';
import Signin from './Pages/Auth/Signin';
import Forgot from './Pages/Auth/Forgot';


function App() {
  return (
    <div  >
       <Router>
           <Routes>
              <Route path="/" element={<Feednews />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/forgot_password" element={<Forgot />} />
           </Routes>
       </Router>
    </div>
  );
}

export default App;
