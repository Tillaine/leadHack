import React from 'react';


class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }


render() {
  const { company, currentStep, nextStep, rating, jobId } = this.props.lead;
    return (
    <li className='lead' id={`id:${jobId}`}>
        <div id={"companyName"}>{company}</div>
        <div className='leadText' id={"currentStep"}>✔︎ Current Step: <em>{currentStep}</em></div>
        <div className='leadText' id={"nextStep"}>❑ Next Step: <em>{nextStep}</em>}</div>
        <div className='leadText' id={"rating"}> ✰ {rating}</div>
    </li>)

  }


}

export default Lead;


