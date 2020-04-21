import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      website: '',
      notes: '',
      contact: '',
      phone: '',
      email: '',
      currentStep: 'Write Cover Letter',
      rating: 1,
      dueDate: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
    e.preventDefault();
}

handleSubmit(e) {
    const newLead = this.state;
    this.props.handleSubmit(newLead)
    this.clearForm();
    e.preventDefault();
  }

clearForm() {
  this.setState({
    company: '',
    position: '',
    website: '',
    notes: '',
    contact: '',
    phone: '',
    email: '',
    currentStep: 'Write Cover Letter',
    rating: 1,
    dueDate: ''
  })
}

render() {

  return (
  <div>
    <h2>New Lead</h2>
      <form onSubmit={this.handleSubmit}>
        <label> Company
          <input onChange={this.handleChange} name="company" value={this.state.company}/>
        </label>
        <label> Position
          <input onChange={this.handleChange} name="position" value={this.state.position}/>
        </label><br></br>
        <label> Website
          <input onChange={this.handleChange} name="website" value={this.state.website}/>
        </label>
        <label> Notes
          <input onChange={this.handleChange} name="notes" value={this.state.notes}/>
        </label><br></br>
        <label> Contact
          <input onChange={this.handleChange} name="contact" value={this.state.contact}/>
        </label>
        <label> Phone
          <input onChange={this.handleChange} name="phone" value={this.state.phone}/>
        </label><br></br>
        <label> email
          <input onChange={this.handleChange} name="email" value={this.state.email}/>
        </label>
        <label> Current Step
          <select onChange={this.handleChange} name="currentStep" value={this.state.currentStep} >
                <option value="Write Cover Letter">Write Cover Letter</option>
                <option value="Send Application">Send Application</option>
                <option value="Follow Up">Follow Up</option>
                <option value="Phone Interview">Phone Interview</option>
                <option value="Interview">Interview</option>
                <option value="Respond to Offer">Respond to Offer</option>
            </select>
        </label><br></br>
        <label> Dream Job Rating
          <select onChange={this.handleChange} name="rating" value={this.state.rating} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>
        <label> Date to complete step
          <input onChange={this.handleChange} name="dueDate" placeholder="yyyy-mm-dd" value={this.state.dueDate}/>
        </label>
        <button>Add Lead</button>
    </form>
  </div>
)


}
}

export default Form;


