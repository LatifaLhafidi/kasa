import React from "react";

function Card({ cover, title }) {
  return (
    <article >
      <img src={cover} alt="location" />
      <div >
        <p >{title}</p>
      </div>
    </article>
  );
}

export default Card;