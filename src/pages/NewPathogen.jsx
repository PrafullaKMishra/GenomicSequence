import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormControl, Input, InputLabel, Container, Button } from '@material-ui/core';

class NewPathogen extends React.Component {
    constructor(props) {
        super(props);
        //this.fileInput = React.createRef();
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);


        this.state = {
                "id": 0, 
                "commonName": '',     
                "scientificName": '',      
                "family": "", 
                "viralFactor": "", 
                "symptoms":"",
                "meta": "",
                "fileName": "",
                "error": ""
        }
    }

    handleFileChange(e){
        //console.log(this.fileInput.current.value);
        const filename = e.target.value 
        this.setState({fileName: filename});
    }


    handleSubmit(e){
        //alert(this.input.current.value);
        if (this.state.family === '' || this.state.scientificName === '')
            this.setState({error:"Missing Required Values"});
        
        else {
            this.props.changeValue(this.state);
            this.props.history.push('/');
        }
    }

    handleCancel(e){
        this.props.history.push('/');
    }

    render() {
        //console.log(this.props.id);
        console.log(this.props);
        return (
            <Container>
                <form>

                    <FormControl>
                        <InputLabel htmlFor="commonNameInput">Common Name</InputLabel>
                        <Input id="commonNameInput"  
                            value={this.state.commonName}
                            onChange={event => this.setState({ commonName: event.target.value })}
                        />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="scientificNameInput">Scientific Name</InputLabel>
                        <Input id="scientificNameInput"  
                            value={this.state.scientificName}
                            onChange={event => this.setState({ scientificName: event.target.value })}
                        />                
                    </FormControl>
                    
                    <FormControl>
                        <InputLabel htmlFor="familyInput">Family</InputLabel>
                        <Input id="familyInput"  
                            value={this.state.family}
                            onChange={event => this.setState({ family: event.target.value })}
                        />                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="viralFactorInput">Viral Factor</InputLabel>
                        <Input id="viralFactorInput"  
                            value={this.state.viralFactor}
                            onChange={event => this.setState({ viralFactor: event.target.value })}
                        />                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="symptomsInput">Symptoms</InputLabel>
                        <Input id="symptomsInput"  
                            value={this.state.symptoms}
                            onChange={event => this.setState({ symptoms: event.target.value })}
                        />                
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="metaInput">Additional Meta Data</InputLabel>
                        <Input id="metaInput"  
                            value={this.state.meta}
                            onChange={event => this.setState({ meta: event.target.value })}
                        />                
                    </FormControl>
                    
                    
                    <FormControl>
                        <InputLabel htmlFor="fileInput"></InputLabel>
                        <Input type="file" id="fileInput"  value={this.state.fileName} accept=".txt"
                            onChange={this.handleFileChange}
                        />        
                    </FormControl>
                    
                    <br/>
                    <p>{this.state.error}</p>
                    <br/>
                                   
                    <Button  variant="contained" color="primary" onClick = {this.handleSubmit} >Submit</Button>
                    <Button  variant="contained"  onClick = {this.handleCancel} >Cancel</Button>

                </form>
            </Container>
        );
    }
}

export default withRouter(NewPathogen);