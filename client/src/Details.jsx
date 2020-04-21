import React from 'react';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
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
                <button onClick={this.props.toggle} className='closeButton'> ✖︎ close</button>
                <div className={position}>{position} ✰{rating}</div>
                <div className='detailsInfo'>
                <div className={currentStep}>Current Step: {currentStep}</div>
                  <div className={nextStep}>Next: {nextStep} by <em className='date'>{date}</em> </div>
                <div className={website}>☻ <a href={website} target="_blank">{website}</a></div>
                <div className={contact}>☻ {contact}</div>
                <div className={phone}>✆ {phone}</div>
                <div className={email}>✉︎ {email}</div>

                </div>
            </div>
        </div>
      </div>
    );

  }


}

export default Detail;


