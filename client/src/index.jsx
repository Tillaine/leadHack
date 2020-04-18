import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Pipeline from './components/Pipeline.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: []
    }
  }

  componentDidMount() {

  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <Pipeline leads={this.state.leads}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));