import React, { Component } from 'react';
import {
    Jumbotron,Alert,Button 
} from 'reactstrap';
import { connect } from 'react-redux';
class add extends Component {
    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            hidden:true,
            result:''

        }
    }

    handleSubmit=(event)=> {
        //alert(this.input1.value+this.input2.value);
        if(!this.input1.value && !this.input1.value){
            return;
        }
        
        let _this = this;
        fetch('jerseyservices/rest/services/add/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({input1:this.input1.value,input2:this.input2.value})
          }).then(function(response) {
            return response.json();
          }).then(function(data) {

            let result = "Result of adding "+_this.input1.value+" and "+_this.input2.value+" is "+data;  
            _this.setState({hidden:false,result:result});

          });
        
      }

      clear=()=>{
        this.setState({hidden:true,result:""});
        this.input1.value = '';
        this.input2.value = '';
      }
    
    render() {
        const {state:{hidden,result}}=this;
        return ( 
            <div className = "parentDiv">
                <Jumbotron className = "">
                <form onSubmit={this.handleSubmit}>
               
                    <input  required class="form-control" placeholder="Enter first Numer" type="number" ref={(input) => this.input1 = input} />
                    <input  required class="form-control" placeholder="Enter Second Numer" type="number" ref={(input) => this.input2 = input} />
                    <div style = {{float:'right',padding:'10px 0px 10px 10px',height:'50px'}}>
                    <Button className = "clearBtn" color="warning" onClick={this.clear.bind(this)}>clear</Button>
                        <input  class="btn btn-info" type="button" value="Submit" onClick={this.handleSubmit.bind(this)}  />
                    </div>
                    <Alert hidden = {hidden} style = {{marginTop:'75px'}} color="success">
                                {result}
                    </Alert>
                </form>
                </Jumbotron> 
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {reduxState:state};
  }
  const mapDispatchToProps = dispatch => {
    return {reduxDispatch:dispatch};
  }
export default connect(mapStateToProps,mapDispatchToProps) (add);