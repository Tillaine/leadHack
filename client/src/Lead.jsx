import React from 'react';


class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      targetID: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e.target.id)
    this.props.toggle(e.target.id)
  }

render() {
  const { company, currentStep, nextStep, rating, _id } = this.props.lead;
    return (
    <li className='lead'>
        <div onClick={this.handleClick} id={`${_id}`}>{company}</div>
        <div className='leadText' id={"currentStep"}>✔︎ Current Step: <em>{currentStep}</em></div>
        <div className='leadText' id={"nextStep"}>❑ Next Step: <em>{nextStep}</em></div>
        <div className='leadText' id={"rating"}> ✰ {rating}</div>
    </li>)

  }


}

export default Lead;


