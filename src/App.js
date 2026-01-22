
import './App.css';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Footer from './Component/Footer';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import DeleteStudent from './Pages/DeleteStudent';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RegisterStudent from './Pages/RegisterStudent';
import UpdateStudent from './Pages/UpdateStudent';
import ViewStudent from './Pages/ViewStudent';
import NotFound from './Pages/NotFound';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/student/register' element={<RegisterStudent/>}/>
      <Route path='/student/Delete' element={<DeleteStudent/>}/>
      <Route path='/student/Update' element={<UpdateStudent/>}/>
      <Route path='/student/view' element={<ViewStudent/>}/>
      <Route path='/student/view/:id' element={<ViewStudent/>}/>
     <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
