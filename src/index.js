import React from 'react';
import ReactDOM from 'react-dom';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = { lat: null, long: null };

            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({ lat: position.coords.latitude })
                    this.setState({ long: position.coords.longitude })
                },
                err => {
                    this.setState({errorMessage: err.message})
                    console.log(err.message)
                }
                );
        }

        render() {
            return (
            <button>Push this!</button>
            )
            // if (this.state.errorMessage && !this.state.lat) {
            //     return <div>Error: {this.state.errorMessage}</div>
            // } 

            // if (!this.state.errorMessage && this.state.lat) {
            //     return <div>
            //                 <p>Lat: {this.state.lat}</p>
            //                 <p>Long: {this.state.long}</p>
            //             </div>
            // }

            // return <div>Loading!</div>

        }
}

ReactDOM.render(
<App />, 
document.querySelector('#root')
);

