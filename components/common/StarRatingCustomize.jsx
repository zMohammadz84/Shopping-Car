import StarRatings from "react-star-ratings";

const StarRatingCustomize = ({ rating, size }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      numberOfStars={5}
      starDimension={size}
      starSpacing="1px"
    />
  );
};

export default StarRatingCustomize;
