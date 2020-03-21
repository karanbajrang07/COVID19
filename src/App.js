import React from 'react';
import corona from './corona.jpeg';
import './App.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${corona})`}}>
      <header className="App-header">
        <div>   COVID19- A THREAT TO HUMANITY</div>
      </header>
      <p style={{color:"white"}}>GO CORONA, CORONA GO</p>
      <div style={{display:"flex", color:"wheat",marginLeft:"14%"}} >
      <div style={{margin:"10px"}}>
       <h1>301</h1>
      <p>Total Cases  </p>
      </div>
      <div style={{margin:"10px"}}>
       <h1>4</h1>
      <p>DEATHS  </p>
      </div>
      <div style={{margin:"10px"}}>
       <h1>23</h1>
      <p>Recovered Cases</p>
      </div>
      </div>
    
        <div className="twitterFeed">
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="WHO"
  options={{height: 400}}
/>
</div>
     
   
    </div>
  );
}

export default App;
