import React from 'react';
import PropTypes from "prop-types";
import { DataGrid } from '@material-ui/data-grid';
import { Button, Container} from '@material-ui/core';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'commonName', headerName: 'Common name', width: 130 },
    { field: 'scientificName', headerName: 'Scientific name', width: 150 },
    { field: 'family', headerName: 'Family', width: 100 },
    { field: 'viralFactor', headerName: 'Viral Factor', width: 130 },
    { field: 'symptoms', headerName: 'Symptoms', width: 130 },
    { field: 'fileName', headerName: 'File Name', width: 130 },
    { field: 'meta', headerName: 'Additional Tags', width: 180 },
  ];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       "id": 0, 
    }
  }
  render() {
    console.log(this.props);
    return (
      <Container>
          <Button variant="contained"  href="/new" >Add New Pathogen</Button>
          <EditButton id={this.state.id } setEditValue={this.props.setEditValue}/>
          <div style={{ height: 400, width: '100%' , alignItems: "center"}}>
              <div style={{ display: 'flex', height: '100%' }}>
                  <div style={{ flexGrow: 1 }}>                
                      <DataGrid rows={this.props.pathogens} columns={columns} 
                      onSelectionChange={(newSelection) => {
                        this.setState({id : newSelection.rowIds[0]});}}
                      pageSize={10}  checkboxSelection/>
                  </div>
              </div>
          </div>
      </Container>
    );
  }
}
function EditButton(props) {
  console.log("edit button id="+props.id);
  if (props.id === 0 || props.id === undefined)
     return ('');
  else{
    //let href = "/new?id="+props.id;
    //props.setEditValue(this.props.pathogens[props.id]);
    return (
      <Button variant="contained"  href="/new" >EDIT Row {props.id}</Button>
    );
  }
}

//EditButton.propTypes = {
  //id: PropTypes.number.isRequired,
  //setEditValue: PropTypes.func.isRequired
//};

export default Home;