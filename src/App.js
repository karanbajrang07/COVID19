import React, { Component } from 'react';
import corona from './corona.jpeg';
import Tablee from './table.js';
import './App.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import YouTube from 'react-youtube-embed'
const dataa=[
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 19,
    "cured": 1,
    "deaths": 0,
    "noOfCases": 19,
    "state": "Andhra Pradesh"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 9,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 9,
    "state": "Andaman and Nicobar Islands"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 11,
    "cured": 0,
    "deaths": 1,
    "noOfCases": 11,
    "state": "Bihar"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 8,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 8,
    "state": "Chandigarh"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 7,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 7,
    "state": "Chhattisgarh"
  },
  {
    "confirmedCasesForiegn": 1,
    "confirmedCasesIndian": 49,
    "cured": 6,
    "deaths": 2,
    "noOfCases": 50,
    "state": "Delhi"
  },
  {
    "confirmedCasesForiegn": 1,
    "confirmedCasesIndian": 5,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 6,
    "state": "Goa"
  },
  {
    "confirmedCasesForiegn": 1,
    "confirmedCasesIndian": 58,
    "cured": 1,
    "deaths": 5,
    "noOfCases": 59,
    "state": "Gujarat"
  },
  {
    "confirmedCasesForiegn": 14,
    "confirmedCasesIndian": 33,
    "cured": 17,
    "deaths": 0,
    "noOfCases": 47,
    "state": "Haryana"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 3,
    "cured": 0,
    "deaths": 1,
    "noOfCases": 3,
    "state": "Himachal Pradesh"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 31,
    "cured": 1,
    "deaths": 2,
    "noOfCases": 31,
    "state": "Jammu and Kashmir"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 76,
    "cured": 5,
    "deaths": 3,
    "noOfCases": 76,
    "state": "Karnataka"
  },
  {
    "confirmedCasesForiegn": 8,
    "confirmedCasesIndian": 182,
    "cured": 15,
    "deaths": 1,
    "noOfCases": 190,
    "state": "Kerala"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 13,
    "cured": 3,
    "deaths": 0,
    "noOfCases": 13,
    "state": "Ladakh"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 30,
    "cured": 0,
    "deaths": 2,
    "noOfCases": 30,
    "state": "Madhya Pradesh"
  },
  {
    "confirmedCasesForiegn": 3,
    "confirmedCasesIndian": 186,
    "cured": 25,
    "deaths": 6,
    "noOfCases": 189,
    "state": "Maharashtra"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 1,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 1,
    "state": "Manipur"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 1,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 1,
    "state": "Mizoram"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 3,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 3,
    "state": "Odisha"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 1,
    "cured": 0,
    "deaths": 0,
    "noOfCases": 1,
    "state": "Puducherry"
  },
  {
    "confirmedCasesForiegn": 0,
    "confirmedCasesIndian": 38,
    "cured": 1,
    "deaths": 1,
    "noOfCases": 38,
    "state": "Punjab"
  },
  {
    "confirmedCasesForiegn": 2,
    "confirmedCasesIndian": 55,
    "cured": 3,
    "deaths": 0,
    "noOfCases": 57,
    "state": "Rajasthan"
  },
  {
    "confirmedCasesForiegn": 6,
    "confirmedCasesIndian": 49,
    "cured": 4,
    "deaths": 1,
    "noOfCases": 55,
    "state": "Tamil Nadu"
  },
  {
    "confirmedCasesForiegn": 10,
    "confirmedCasesIndian": 66,
    "cured": 1,
    "deaths": 1,
    "noOfCases": 76,
    "state": "Telengana"
  },
  {
    "confirmedCasesForiegn": 1,
    "confirmedCasesIndian": 7,
    "cured": 2,
    "deaths": 0,
    "noOfCases": 8,
    "state": "Uttarakhand"
  },
  {
    "confirmedCasesForiegn": 1,
    "confirmedCasesIndian": 65,
    "cured": 11,
    "deaths": 0,
    "noOfCases": 66,
    "state": "Uttar Pradesh"
  }
]
function createData(State, cases, Cured,Deaths) {
  return { State, cases, Cured,Deaths};
}
let totalcases=0;
let totalcures=0;
let totaldeath=0;
let rows = [];
dataa.map(item=>{
  totalcases+=item.noOfCases;
  totalcures+=item.cured;
  totaldeath+=item.deaths
  rows.push(createData(item.state, item.noOfCases, item.cured,item.deaths))
});
class App extends Component {
  state={
    data:[]
}
componentDidMount() {

      const procxy='https://cors-anywhere.herokuapp.com/';
      const url='https://covid-cases-india.azurewebsites.net/';
    fetch(procxy+url)
    .then(response => response.json())
    .then(data => this.setState({ data }))
    //  .then(response => response.json() , console.log(response))
     
    //   .then(response => {
    //     const { memes } = response.data;
    //     this.setState({
    //       allMemes: memes
    //     });
    //   });
  }

  render(){
    function createData(State, cases, Cured,Deaths) {
      return { State, cases, Cured,Deaths};
    }
    let totalcasesAPI=0;
    let totalcuresAPI=0;
    let totaldeathAPI=0;
    let rowsAPI = [];
    this.state.data.map(item=>{
      totalcases+=item.noOfCases;
      totalcures+=item.cured;
      totaldeath+=item.deaths
      rowsAPI.push(createData(item.state, item.noOfCases, item.cured,item.deaths))
    });
    rows=(rowsAPI.length==0)?rows:rowsAPI;
    totalcases=(totalcasesAPI===0)?totalcases:totalcasesAPI;
    totalcures=(totalcuresAPI===0)?totalcures:totalcuresAPI;
    totaldeath=(totaldeathAPI===0)?totaldeath:totaldeathAPI;
  return (

    <div className="App" style={{ backgroundImage:`url(${corona})`}}>
      <div class="overlay">
      <header className="App-header">
        <div>   COVID19- A THREAT TO HUMANITY</div>
      </header>
      <p style={{color:"white"}}>GO CORONA, CORONA GO</p>
      <div style={{display:"flex", color:"wheat",marginLeft:"14%"}} >
      <div style={{margin:"10px"}}>
       <h1>{totalcases}</h1>
      <p>Total Cases  </p>
      </div>
      <div style={{margin:"10px"}}>
  <h1>{totaldeath}</h1>
      <p>DEATHS  </p>
      </div>
      <div style={{margin:"10px"}}>
  <h1>{totalcures}</h1>
      <p>Recovered Cases</p>
      </div>
      </div>
      <div>
    <Tablee rows={rows}/>
      </div>
    
        <div className="twitterFeed">
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="WHO"
  options={{height: 400}}
/>
<div style={{marginTop:"20px", marginBottom:"20px"}}><YouTube id='4dPd708Sk98' /></div>

<a href="https://www.mohfw.gov.in/" target="_blank">Click here for more updates</a>
</div>
</div>
   
    </div>
  );
}
}

export default App;
