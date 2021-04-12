import React from 'react'

export default function Resort(props) {
  let link=`/resorts/${props.resort._id}`
  return (
    <a href={link} className="col-6">
      <div className="card">
        <img className="card-img-top" src={props.resort.imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{props.resort.name}</h5>
        </div>
      </div>
    </a>
  )
}
