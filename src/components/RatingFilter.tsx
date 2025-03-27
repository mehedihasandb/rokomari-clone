import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingFilter = ({ ratings, setRatings }) => {
  const handleRatingChange = (index) => {
    const newRatings = [...ratings];
    newRatings[index].isChecked = !newRatings[index].isChecked;
    setRatings(newRatings);
  };

  return (
    <div className="mb-4">
      <h3 className="text-base text-black-700 font-semibold mb-2 mt-4">Ratings</h3>
      <ul className="flex flex-col space-y-2 mt-4">
        {ratings.map((rating, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={rating.isChecked}
              onChange={() => handleRatingChange(index)}
              className="mr-2"
            />
            {[...Array(rating.stars)].map((_, starIndex) => (
              <FaStar key={starIndex} className="text-yellow-500" />
            ))}
            {/* <span className="ml-2">{rating.stars} stars</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingFilter;
