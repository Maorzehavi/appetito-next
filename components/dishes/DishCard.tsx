import Image from 'next/image';
import React from 'react'

type DishCardProps = {
  name: string;
  description: string;
  image: string;
}

function DishCard(props: DishCardProps) {
  return (
    <div className="card bg-base-100 w-96 max-w-xs ">
      <div className="card-body text-right"> {/* Applied text-right here */}
        <h2 className="card-title text-right">{props.name}</h2>
        <div className="h-24 text-right">
          <p>{props.description}</p>
        </div>
      </div>
      <figure>
        <Image src={props.image ? props.image : ''} alt={props.name} width={384} height={300} />
      </figure>
    </div>
  )
}

export default DishCard;
