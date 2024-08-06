// Rating.js
import React from 'react';
import './Rating.css'; // Add your CSS for stars here

const Rating = ({ rating }) => {
  const maxRating = 10; // TMDB ratings are out of 10
  const starCount = 5; // Number of stars to display

  // Calculate how many stars should be filled
  const filledStars = Math.round((rating / maxRating) * starCount);
  const stars = Array.from({ length: starCount }, (_, index) => (
    <span key={index} className={index < filledStars ? 'star filled' : 'star'}>
      ★
    </span>
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;
