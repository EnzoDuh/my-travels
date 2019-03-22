import React from "react";

const Travel = ({ travel, country, image, distance }) => (
  <figure>
    <img src={image} alt={country} />
    <figcaption>
      <blockquote>{travel}</blockquote>
      <blockquote>{country}</blockquote>
      <blockquote>{distance}</blockquote>
    </figcaption>
  </figure>
);

export default Travel;