import React, { Component } from 'react';
import './App.css';
import {Navbar,NavbarBrand,Button} from 'reactstrap';
import clock from './components/clock';
import add from './components/add';
import count from './components/count';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  openTab=(tab)=>{        
    this.props.history.push("/"+tab);  // By install (history) node module. we can achieve this.                              
  }


  render() {
    return (
     
       <div>
       
        <Navbar color="dark" light expand="md">
            <NavbarBrand >  
              <Button color="secondary" onClick={this.openTab.bind(this,'')}>Clock is here :)</Button>
            </NavbarBrand>.
            <NavbarBrand >  
              <Button color="secondary" onClick={this.openTab.bind(this,'add')}>Wanna add !!</Button>
            </NavbarBrand>
            <NavbarBrand >  
              <Button color="secondary" onClick={this.openTab.bind(this,'count')}>Need a count??</Button>
            </NavbarBrand>
        </Navbar>
       
            <Switch>
                  <Route exact path='/' component={clock} />
                  <Route exact path='/add' component={add} />
                  <Route exact path='/count' component={count} />
            </Switch>
     
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
