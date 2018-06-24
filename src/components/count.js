import React, { Component } from 'react';
import {
    Jumbotron,Input,Button,FormGroup,Label,Alert 
} from 'reactstrap';
class count extends Component {
    constructor(props) {
        super(props);
        this.state = {
         value: '',   
         hidden:true,
         result:''
        };
        this.handleChange = this.handleChange.bind(this);   
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

     count=(text)=>{        
        //alert(this.state.value); 
        if(!this.state.value){
            return;
        }

        let _this = this;
        fetch('jerseyservices/rest/services/count/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text:this.state.value})
          }).then(function(response) {
            return response.json();
          }).then(function(data) {
            let result = "Count of the given text is "+data;  
            _this.setState({hidden:false,result:result});
          });
        
      }

      clear=()=>{
        this.setState({hidden:true,result:"",value:''});
      }
    
    render() {
        const {state:{value,hidden,result}}=this;
        return (
            <div className = "parentDiv">
                <Jumbotron className = "">
                     <FormGroup>
                        <Label>Text Area</Label>
                        <Input maxlength="500" value={value} onChange={this.handleChange}  style = {{height:'150px'}} type="textarea" name="text"/>
                        <div style = {{float:'right',padding:'10px 0px 10px 10px',height:'50px'}}>
                            <Button className = "clearBtn" color="warning" onClick={this.clear.bind(this)}>clear</Button>
                            <Button color="info" onClick={this.count.bind(this)}>Check Count</Button>
                        </div>
                        <Alert hidden = {hidden} style = {{marginTop:'75px'}} color="success">
                                {result}
                        </Alert>
                    </FormGroup>
                    
                </Jumbotron> 
            </div>
        );
    }
}

export default count;