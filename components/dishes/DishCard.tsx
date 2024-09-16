import Image from 'next/image';
import React from 'react';

type DishCardProps = {
  name: string;
  description: string;
  image: string;
};

function DishCard(props: DishCardProps) {
  return (
    <div className="card bg-base-100 w-96 max-w-xs text-right">
      <div className="card-body">
        <h2 className="card-title text-2xl">{props.name}</h2>
        <div className="overflow-auto h-24 text-lg">
          <p>{props.description}</p>
        </div>
      </div>
      <figure className="w-full h-auto"> {/* Make the figure responsive */}
        <Image
          src={props.image ? props.image : ''}
          alt={props.name}
          width={384}
          height={300}
          className="object-cover w-full max-h-[213px]"
          layout="responsive"
        />
      </figure>
    </div>
  );
}

export default DishCard;
