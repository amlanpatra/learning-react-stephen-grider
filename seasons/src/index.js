import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage)
      return (
        <div>
          <h1>Latitude : {this.state.lat}</h1>
        </div>
      );

    if (!this.state.lat && this.state.errorMessage)
      return (
        <div>
          <h1>Error : Location not granted</h1>
        </div>
      );

    return (
      <div>
        <h1>Loading!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
