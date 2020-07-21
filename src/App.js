import React, { Component } from 'react';
import CollegeList from './colleges/CollegeList';
import CollegeData from '../src/data/data.json';
import './App.css';

class App extends Component {
  state = {
    CollegeList: [],
    offset: 0,
    datalength: "",
    perpage: 10
  };

  componentDidMount() {
    this.setState(() => ({ datalength: CollegeData["colleges"].length }));
    this.fetchdata();
  }
   fetchdata = () => {
      const data = CollegeData["colleges"]
      .slice(this.state.offset, this.state.offset + this.state.perpage)
      .map((college) => {
           return college;
      });
      this.setState(() => ({
        CollegeList: this.state.CollegeList.concat(data),
        offset: this.state.offset + this.state.perpage,
      }));
   };

   render() {
     return (
              <div className="App">
             <CollegeList CollegeList = { this.state.CollegeList } />
           </div>              
     );
   }
}

export default App;
