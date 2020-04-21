import React from 'react';
import Lead from './Lead.jsx';

const Pipeline = (props) => {

  return (
    <div >
      <ul>
      {props.leads.map(lead => {
        return <Lead lead={lead} key={lead._id}/>
        })
      }
      </ul>
    </div>
  )


}

export default Pipeline;