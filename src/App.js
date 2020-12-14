import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import Home from './pages/Home';
import NewPathogen from './pages/NewPathogen';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"pathogens": [
        { "id": 1, "commonName": 'worm1',     "scientificName": "Heiminth",      "family": "parasites", "viralFactor": "live in host", "symptoms":"infection","meta": "", "fileName": "DNAJan152020.txt" },
        { "id": 2, "commonName": 'small pox', "scientificName": "Variola Major", "family": "virus", "viralFactor": "person to person", "symptoms":"fever","meta": "airborne", "fileName": "DNAFeb92020.txt"},
        { "id": 3, "commonName": 'hookworm',  "scientificName": "Hookworm",      "family": "parasites", "viralFactor": "Enter via skin", "symptoms":"iching", "fileName": "DNAMarch102020.txt" },
    ],
    "newPathogen":{},
    "lastId": 3,
    };
  }

  setEditValue(pathogen) {
    this.setState({"newPathogen": pathogen});
  }

  changeValue(pathogen) {
    this.setState({newPathogen: pathogen});
    if (pathogen.id === 0) {
      pathogen.id = this.state.lastId + 1;
      this.setState({id: pathogen.id})
    }
    this.setState(state => {
      const list = state.pathogens.push(state.newPathogen);
  
      return {
        list,
        newPathogen: '',
        }
      });
  
  }
  

  render() {

    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit"><Link to="/"><HomeIcon/></Link></Button>
            <Typography variant="h6" >Genomic Sequence</Typography>
          </Toolbar>
        </AppBar>

        <div>
          <Switch>
            <Route path="/new">
              <NewPathogen changeValue={this.changeValue.bind(this)} pathogen={this.state.newPathogen}/>
            </Route>
 
            <Route path="/">
              <Home pathogens={this.state.pathogens} setEditValue={this.setEditValue.bind(this)} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  }


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default App;
