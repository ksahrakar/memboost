import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer";
import ParkCard from "./components/ParkCard";
import Header from "./components/Header";
import parks from "./parks.json";

class App extends Component {
  state = {
    parks,
    clickedPark:[],
    score:0
  };

  // imageClick = e =>{
  //   const currentPark = e.target.alt;

  // }

  render() {
    return (
      <div>
        <Header/>
        {/* <ScoreCard/> */}
        <div className="wrapper">
          {this.state.parks.map(park =>(
          <ParkCard
            imageClick={this.imageClick}
            id={park.id}
            key={park.id}
            name={park.name}
            image={park.image}
          />
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
