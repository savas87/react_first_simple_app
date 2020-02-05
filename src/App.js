import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      errorMessage: ''
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }
  renderContent() {
    if (!this.state.lat && !this.state.lng && this.state.errorMessage) {
      return <p>Error: {this.state.errorMessage}</p>
    }
    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
    }
    return <Spinner />
  }
  render() {
    return(
      <div className='border red'>
        {this.renderContent()}
      </div>
    )
  }
}

export default App;
