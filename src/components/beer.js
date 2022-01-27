import React, { Component } from 'react';
import axios from 'axios';

class Beer extends Component{
    state={
        beers: []
    }

    getbeer = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then( (response) => {
        this.setState({beers:response.data})
    // handle success
    console.log(response);
     })
    .catch( (error) => {
        // handle error
        console.log(error);
    })
    }

    componentDidMount(){
       this.getbeer()
    }

    render(){
        console.log("BEERS =>", this.state.beers)
      return(
          <div>
              <h1>Beer</h1>
              {this.state.beers.map(el => {
                  return(
                    <div>
                        {el.name}
                    </div>
                  )
              })}

          </div>
        )
    }
}

export default Beer;