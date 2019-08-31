import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class CodeBreaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.onChange = this.onChange.bind(this);
    this.setSecret = this.setSecret.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  setSecret(event) {
      axios.get(`http://localhost:4200/setsecret/${this.state.value}`).then(res =>{
        console.log(res.data);
    })
    event.preventDefault();
  
  }

  guess(event) {
    axios.get(`http://localhost:4200/guess/${this.state.value}`).then(res =>{
        console.log(res.data);
    })
  event.preventDefault();

}

  render() {
    return (
      <div>
        <header>
        Code Breaker
        </header>
      <form onSubmit={this.setSecret}>
          <input type="text" value={this.state.value} onChange={this.onChange} />
          <input type="submit" value="Set secret"/>
      </form>
      <input type="button" onClick></input>
      
      </div>
    );
  }
}

export default CodeBreaker;