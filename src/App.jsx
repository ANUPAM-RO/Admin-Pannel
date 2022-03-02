import './App.css';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import UserList from './components/pages/userList/UserList';
function App() {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
      <Sidebar/>
     
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route exact path='/' element={<Home/>}/>
      </Routes>
      
      </div>
      
    </Router>
  );
}

export default App;
