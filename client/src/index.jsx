import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Pipeline from './Pipeline.jsx';
import Form from './Form.jsx';
import PopForm from './popForm.jsx';
import Details from './Details.jsx';
import {tempData} from '../tempData.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: tempData,
      formOn: false,
      detailsOn: false,
      details: tempData[0]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.toggleDetails = this.toggleDetails.bind(this)
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

  toggleForm() {
    this.setState({
      formOn: !this.state.formOn
    })
  }

  toggleDetails(targetId) {
    let target = '';
    this.state.leads.forEach(lead => {
      if(lead._id === targetId){
        target = lead;
      }

    })
    this.setState({
      details: target,
      detailsOn: !this.state.detailsOn
    })
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
    return (
      <div>
        <div>
          <h1>Leads</h1>
            <button onClick={this.toggleForm} >New Lead</button>
            {this.state.formOn ? < PopForm handleSubmit={this.handleSubmit} toggle={this.toggleForm} /> : null}
            {this.state.detailsOn ? < Details lead={this.state.details} toggle={this.toggleDetails} /> : null}
          <div className='appContainer'>
            <div id='pipeline'>
              <Pipeline toggle={this.toggleDetails} leads={this.state.leads}/>
            </div>
              {/* <div id='formContainer'> */}
              {/* <Form handleSubmit={this.handleSubmit}/> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));