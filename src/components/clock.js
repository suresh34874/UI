import React, { Component } from 'react';
import {
    Jumbotron,Button 
} from 'reactstrap';
import '../App.css';
import { connect } from 'react-redux';
class clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
           time:""
       }
    }
    
    getTime=()=>{
        let _this = this;
        fetch('jerseyservices/rest/services/time')
        .then((response) =>{
            return response.text()
        }).then(function(json){
            //console.log(json);
           // _this.setState({time:json})
           _this.props.reduxDispatch({type:'CLOCK',time:json})
        })
    }
    
    runClock=()=>{
      let _this = this;
      this.clockInterval = setInterval(()=>{
        _this.getTime();
      },1000)
    }
    
    componentDidMount=()=>{
        this.runClock();
    }
    
    componentWillUnmount() {
      console.log('clock unmout callled');
      clearInterval(this.clockInterval);
    }

    render() {
        return (
            <div className = "parentDiv">
                <Jumbotron className = "jumbotronFont">
                    {this.props.reduxState.time}
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

export default connect(mapStateToProps,mapDispatchToProps)(clock);