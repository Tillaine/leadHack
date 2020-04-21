import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Pipeline from './Pipeline.jsx';
import Form from './Form.jsx';
import {tempData} from '../tempData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: tempData
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/leads')
      .then(addResponse => {
          return addResponse.json()
      })
      .then(leads => {
          console.log('formated response', leads)
          this.setState({leads})
      })
      .catch(err => console.log('error while getting leads', err))
  }

  handleSubmit (newLead) {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `${JSON.stringify(newLead)}`
    }

    fetch('http://localhost:3000/api/leads', options)
    .then(addResponse => {
      return addResponse.json()
    })
    .then(leads => {
      this.setState({leads})
      })
      .catch(err => console.log('error while adding move', err))
  }

  render () {
    return (<div>
      <h1>Leads</h1>
      <div className='appContainer'>
        <div id='pipeline'>
          <Pipeline leads={this.state.leads}/>
         </div>
          <div id='formContainer'>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));