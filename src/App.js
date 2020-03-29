import React from 'react';
import corona from './corona.jpeg';
import Tablee from './table.js';
import './App.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import YouTube from 'react-youtube-embed'

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${corona})`}}>
      <div class="overlay">
      <header className="App-header">
        <div>   COVID19- A THREAT TO HUMANITY</div>
      </header>
      <p style={{color:"white"}}>GO CORONA, CORONA GO</p>
      <div style={{display:"flex", color:"wheat",marginLeft:"14%"}} >
      <div style={{margin:"10px"}}>
       <h1>325</h1>
      <p>Total Cases  </p>
      </div>
      <div style={{margin:"10px"}}>
       <h1>5</h1>
      <p>DEATHS  </p>
      </div>
      <div style={{margin:"10px"}}>
       <h1>25</h1>
      <p>Recovered Cases</p>
      </div>
      </div>
      <div>
    <Tablee/>
      </div>
    
        <div className="twitterFeed">
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="WHO"
  options={{height: 400}}
/>
<a href="https://www.mohfw.gov.in/" target="_blank">Click here for more updates</a>
<YouTube id='4dPd708Sk98' />
</div>
</div>
   
    </div>
  );
}

export default App;
