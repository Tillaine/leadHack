import React from 'react';

const Lead = (props) => {
  console.log(props.leads)

  return (
    <div className='Lead'>
      {props.leads.forEach(lead => {
        const { currentStep, nextStep, rating, company } = props.lead
        return (
          <div>
            <ul>
              <li id={companyName}>{company}</li>
              <li id={currentStep}>{currentStep}</li>
              <li id={nextStep}>Next Step {nextStep}</li>
              <li id={nextStep}>✰ {rating}</li>
            </ul>
          </div>
        )
        })
      }
    </div>

  )


}

export default Lead;


