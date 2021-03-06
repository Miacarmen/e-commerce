import React from "react";

const Card = () => {
  return (
    <div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm btn-primary rounded-full">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
