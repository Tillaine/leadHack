import React from 'react';
import Lead from './Lead.jsx';

const Pipeline = (props) => {
  console.log(props.leads)

  return (
    <div className='pipeline'>
      <ul>
      {props.leads.map(lead => {
        console.log('lead', lead)
        return <Lead lead={lead} key={lead.jobId}/>
        })
      }
      </ul>
    </div>
  )


}

export default Pipeline;