import React from 'react'

export default function Park(props) {
  let link=`/parks/${props.park._id}`
  return (
    <a href={link} className="col-6">
      <div className="card">
        <img className="card-img-top" src={props.park.imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{props.park.name}</h5>
        </div>
      </div>
    </a>
  )
}
