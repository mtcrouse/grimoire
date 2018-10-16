import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.doSignIn = this.doSignIn.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  doSignIn(event) {
    event.preventDefault();

    let data = { username: this.state.username,
      password: this.state.password
    };

    axios.post('/auth/signin', data)
      .then((_res) => {
        
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  createAccount(event) {
    event.preventDefault();

    let data = { username: this.state.username,
      password: this.state.password
    };

    axios.post('/auth/newuser', data)
      .then((_res) => {
        this.doSignIn();
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  }

  render() {
    return (
      <div className="container">
        <h3 className="cormorant left-align">Sign In</h3>
        <div className="row">
          <div className="six columns">
            <form onSubmit={this.doSignIn}>
              <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
              <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="six columns">
            <form onSubmit={this.createAccount}>
              <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
              <input type="password" placeholder="password" name="password" onChange={this.handleChange} />
              <button type="submit">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
