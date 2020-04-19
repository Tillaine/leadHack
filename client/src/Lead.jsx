import React from 'react';


class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }


render() {

  console.log('lead', this.props.lead)
  const { company, currentStep, nextStep, rating } = this.props.lead;
    return (
    <li className='lead'>
        <div id={"companyName"}>{company}</div>
        <div className='leadText' id={"currentStep"}>{currentStep}</div>
        <div className='leadText' id={"nextStep"}>Next Step {nextStep}</div>
        <div className='leadText' id={"rating"}> ✰ {rating}</div>
    </li>)

  }


}

export default Lead;


