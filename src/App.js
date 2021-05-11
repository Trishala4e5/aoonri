import logo from './logo192.jpg';
import './App.css';
import { Component } from 'react/cjs/react.development';
import Navbar from "./components/Navbar/Navbar.js";
import Carousel from "./components/Carousel/Carousel.js";
import CustomArrows from "./components/Slider/Slider.js";
import Classifieds from "./components/Classifieds.js";
import Immigration from "./components/Immigration/Immigration.js";
import Events from "./components/Events.js";
import Jobs from "./components/Jobs/Jobs.js";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Carousel/>
        <CustomArrows/>
        <Classifieds/>
        <Immigration/>
        <Events/>
        <Jobs/>
      </div>
    );

    }
  
}

export default App;
