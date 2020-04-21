import React from 'react';
import Lead from './Lead.jsx';

const Pipeline = (props) => {

  return (
    <div >
      <ul>
      {props.leads.map(lead => {
        return <Lead toggle={props.toggle} lead={lead} key={lead._id}/>
        })
      }
      </ul>
    </div>
  )


}

export default Pipeline;