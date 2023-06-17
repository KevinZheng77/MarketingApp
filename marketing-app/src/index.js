import React from 'react';
import ReactDOM from 'react-dom';
import hemisphereDisplay from './hemiDisplay';

class App extends React.Component{

    state = {latitude: null, errorMessage: ''}

    componentDidMount(){
        // get user location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {this.setState( {latitude: position.coords.latitude })},
            (error) => {this.setState({errorMessage: error.message})}
        );
    }
    render() {
        if(this.state.errorMessage && !this.state.latitude){
            return <div>{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude){
            return<div><hemisphereDisplay latitude = {this.state.latitude} /></div>
        }
        else{
            return<div>Loading</div>
        }
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)