import Loading from './Loading'
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

    class App extends React.Component {

        state = { lat: null, errorMessage: ''};

            componentDidMount() { 
                window.navigator.geolocation.getCurrentPosition(
                    position => this.setState({ lat: 45 }),
                    err => this.setState({errorMessage: err.message}) 
              );
            }

            renderContent() {
                if (this.state.errorMessage && !this.state.lat) {
                    return <div>Error: {this.state.errorMessage}</div>
                    
                }
    
                if (!this.state.errorMessage && this.state.lat) {
                    return <SeasonDisplay lat={this.state.lat} />
                }
                    return <Loading message="Looking for your coordinates..."/>

            }

        render() {  
            return (
            <div className="border-style">
                {this.renderContent()};
            </div>
            )
        }
};

ReactDOM.render(
<App />, 
document.querySelector('#root')
);

