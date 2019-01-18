import React, { Component } from 'react';
import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import ParkCard from "./components/ParkCard";
import Footer from "./components/Footer";
import parks from "./parks.json";
import './App.css';

let gamesPlayed = 0;

// Array of parks is shuffled
const shuffleParks = (array)=>{
  let currIndex = array.length;
  while(0!==currIndex){
    let randIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;
      let tempValue = array[currIndex];
      array[currIndex] = array[randIndex];
      array[randIndex] = tempValue;
  }
  return array;
}

class App extends Component {
  state = {
    parks,
    score:0,
    topScore:0,
    message:"",
    clickedPark:[]
  };

  componentDidMount(){
    this.setState({message:"To get started...CLICK A PARK!"})
  }

  scrambleParks = ()=>{
    let newParks = shuffleParks(parks);
    this.setState({parks:newParks})
  }

  increment = ()=>{
    let cScore = this.state.score + 1;
    // Max score achieved
    if (cScore===this.state.parks.length){
      gamesPlayed++;
      this.setState({
        message:"Maximum score achieved - YOU WIN!",
        topScore:cScore,
        score:0,
        clickedPark:[],
        parks
      });
    // New high score
    } else if (cScore>this.state.topScore){
      this.setState({
        message:"High score - KEEP CLICKING!",
        topScore:cScore,
        score:cScore
      });
    // Not a duplicate - keep going
    } else {
      this.setState({
        message:"Good guess - KEEP CLICKING!",
        score:cScore
      })
    }
    this.scrambleParks();
  }

  resetGame=()=>{
    gamesPlayed++;
    this.setState({
      score:0,
      topScore: this.state.topScore,
      message:"That's a duplicate - YOU LOST!",
      clickedPark:[],
      parks
    })
    this.scrambleParks();
  }

  handleClick = (clkd) =>{
    // Park not clicked yet
    if(!this.state.clickedPark.includes(clkd)){
      this.increment();
      this.state.clickedPark.push(clkd);
    } else {
      this.resetGame();
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="wrapper">
          <ScoreCard 
            score={this.state.score}
            topScore={this.state.topScore}
            gamesPlayed={gamesPlayed}
            message={this.state.message}/>
          {this.state.parks.map(park =>(
            <ParkCard
              id={park.id}
              key={park.id}
              name={park.name}
              image={park.image}
              handleClick={this.handleClick}/>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
