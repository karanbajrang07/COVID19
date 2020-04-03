import React, { Component } from 'react';
import corona from './corona.jpeg';
import Tablee from './table.js';
import './App.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import YouTube from 'react-youtube-embed'
const dataa=[
  {
    "cured": 1,
    "deaths": 1,
    "noOfCases": 86,
    "state": "Andhra Pradesh"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 10,
    "state": "Andaman and Nicobar Islands"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 5,
    "state": "Assam"
  },
  {
    "cured": 0,
    "deaths": 1,
    "noOfCases": 24,
    "state": "Bihar"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 16,
    "state": "Chandigarh"
  },
  {
    "cured": 2,
    "deaths": 0,
    "noOfCases": 9,
    "state": "Chhattisgarh"
  },
  {
    "cured": 8,
    "deaths": 4,
    "noOfCases": 219,
    "state": "Delhi"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 5,
    "state": "Goa"
  },
  {
    "cured": 8,
    "deaths": 7,
    "noOfCases": 87,
    "state": "Gujarat"
  },
  {
    "cured": 21,
    "deaths": 0,
    "noOfCases": 43,
    "state": "Haryana"
  },
  {
    "cured": 1,
    "deaths": 1,
    "noOfCases": 3,
    "state": "Himachal Pradesh"
  },
  {
    "cured": 2,
    "deaths": 2,
    "noOfCases": 62,
    "state": "Jammu and Kashmir"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 1,
    "state": "Jharkhand"
  },
  {
    "cured": 9,
    "deaths": 3,
    "noOfCases": 110,
    "state": "Karnataka"
  },
  {
    "cured": 25,
    "deaths": 2,
    "noOfCases": 265,
    "state": "Kerala"
  },
  {
    "cured": 3,
    "deaths": 0,
    "noOfCases": 13,
    "state": "Ladakh"
  },
  {
    "cured": 0,
    "deaths": 6,
    "noOfCases": 99,
    "state": "Madhya Pradesh"
  },
  {
    "cured": 42,
    "deaths": 13,
    "noOfCases": 335,
    "state": "Maharashtra"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 1,
    "state": "Manipur"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 1,
    "state": "Mizoram"
  },
  {
    "cured": 0,
    "deaths": 0,
    "noOfCases": 4,
    "state": "Odisha"
  },
  {
    "cured": 1,
    "deaths": 0,
    "noOfCases": 3,
    "state": "Puducherry"
  },
  {
    "cured": 1,
    "deaths": 4,
    "noOfCases": 46,
    "state": "Punjab"
  },
  {
    "cured": 3,
    "deaths": 0,
    "noOfCases": 108,
    "state": "Rajasthan"
  },
  {
    "cured": 6,
    "deaths": 1,
    "noOfCases": 234,
    "state": "Tamil Nadu"
  },
  {
    "cured": 1,
    "deaths": 3,
    "noOfCases": 107,
    "state": "Telengana"
  },
  {
    "cured": 2,
    "deaths": 0,
    "noOfCases": 7,
    "state": "Uttarakhand"
  },
  {
    "cured": 14,
    "deaths": 2,
    "noOfCases": 113,
    "state": "Uttar Pradesh"
  },
  {
    "cured": 6,
    "deaths": 3,
    "noOfCases": 53,
    "state": "West Bengal"
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
  totalcases+=parseFloat(item.noOfCases);
  totalcures+=parseFloat(item.cured);
  totaldeath+= parseFloat(item.deaths);
  rows.push(createData(item.state, item.noOfCases, item.cured,item.deaths))
});
class App extends Component {
  state={
    data:[]
}
componentDidMount() {

      const url='https://covid-india-cases.herokuapp.com/';
    fetch(url)
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
      totalcasesAPI+= parseFloat(item.noOfCases);
      totalcuresAPI+= parseFloat(item.cured);
      totaldeathAPI+= parseFloat(item.deaths);
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
