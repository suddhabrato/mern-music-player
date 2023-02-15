import React from "react";

const SongCard = ({ name, artist, id }) => {
  return (
    <div className="card w-96 max-h-48 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/1493004/pexels-photo-1493004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{artist}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
