import React from 'react';
import Lead from './components/Lead.jsx';

const Pipeline = (props) => {
  console.log(props.leads)

  return (
    <div className='pipeline'>
      {props.leads.forEach(lead => {
        return <Lead lead={lead} key={lead.jobId}/>
        })
      }
    </div>

  )


}

export default Pipeline;