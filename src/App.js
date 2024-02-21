import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'

function App() {
   
  return (
    <div className="App">
      <Home/>
      <ToastContainer/>
    
    </div>
  );
}

export default App;
