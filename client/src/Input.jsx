import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: Null,
      position: Null,
      website: Null,
      notes: Null,
      contact: Null,
      phone: Null,
      email: Null,
      currentStep: 'Write Cover Letter',
      rating: Null,
      dueDate: Null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    // console.log(e.target);
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
    e.preventDefault();
}


render() {

  console.log('Form', this.props.field)
  return (
  <label> {Company}
    <input onChange={this.handleChange} name="company" value={this.state.company}/>
  </label>
)


}

export default Form;


