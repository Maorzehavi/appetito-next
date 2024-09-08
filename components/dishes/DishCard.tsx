import React from 'react'

type DishCardProps = {
    name: string;
    description: string;
    image: string;
}

function DishCard(props : DishCardProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.description}</p>
        </div>
        <figure>
          <img
            src={props.image}
            alt={props.name}/>
        </figure>
      </div>
    )
}

export default DishCard