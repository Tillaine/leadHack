import React from 'react';



class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      updateField: '',
      updateValue: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearpopForm = this.clearpopForm.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
    e.preventDefault();
}

handleSubmit(e) {
    if(this.state.updateField !== ''){

      let updates = {};
      updates[this.state.updateField] = this.state.updateValue;
      updates._id = `ObjectId("${this.props.lead._id}")`
      console.log(updates)
      this.props.handleSubmit(updates)
      this.clearpopForm();
      e.preventDefault();

    }

  }

  clearpopForm() {
    this.setState({
      clicked: false,
      updateField: '',
      updateValue: '',
    })
  }

render() {
  const { company, currentStep, nextStep, rating, _id, contact, phone, email, website, dueDate, position } = this.props.lead;
  const date = new Date(dueDate).toString().split(' ').slice(0, 3).join(' ');



    return (
      <div className="details">
        <div className="details_content">
          <span className="close" onClick={this.props.toggle}>
            &times;
          </span>
            <div>
              <h1>{company}</h1>
                <div className={position}>{position} ✰{rating}</div>
                <div className='detailsInfo'>
                <div className={currentStep}>Current Step: {currentStep}</div>
                  <div className={nextStep}>Next: {nextStep} by <em className='date'>{date}</em> </div>
                <div className={website}>☻ <a href={website} target="_blank">{website}</a></div>
                <div className={contact}>☻ {contact}</div>
                <div className={phone}>✆ {phone}</div>
                <div className={email}>✉︎ {email}
                </div><br></br>
                <h2>Update Lead</h2>
          <form>
                <label> Update Field
                  <select onChange={this.handleChange} name="updateField" >
                    <option value="blank">select feild</option>
                    <option value="contact">contact</option>
                    <option value="position">position</option>
                    <option value="phone">phone</option>
                    <option value="email">email</option>
                    <option value="currentStep">current Step</option>
                    <option value="dueDate">Due Date</option>
                    <option value="NextStep">Next Step</option>
                  </select>
                </label>
                <label> Update
                  <input onChange={this.handleChange} name="updateValue" placeholder="what's changed?" value={this.state.dueDate}/>
                </label>
                <button onClick={this.handleSubmit} className='closeButton'> ✎ Update Lead</button>
          </form>
              <button onClick={this.props.toggle} className='closeButton'> ✖︎ close</button>
                </div>
            </div>
        </div>
      </div>
    );

  }


}

export default Detail;


