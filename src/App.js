import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';



import{ BrowserRouter as Router  , Routes ,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
           <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/Menu' exact Component={Menu} />
        <Route path='/About' exact Component={About} />
         <Route path='/Contact' exact Component={Contact} />

      </Routes>
      < Footer />
     </Router>
    </div>
  )
}

export default App;
