interface RateVotes {
  rating: number;
}

const Rate = ({ rating }: RateVotes) => {
  const renderStars = (rating: number) => {
    if (rating < 0.6) {
      return (
        <svg viewBox="0 0 22 22">
          <use href="/images/icons/star-empty.svg#root"></use>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 22 22">
          <use href="/images/icons/star-full.svg#root"></use>
        </svg>
      );
    }
  };
  return (
    <div className="star-votes">
      {renderStars(rating)}
      {renderStars(rating - 1)}
      {renderStars(rating - 2)}
      {renderStars(rating - 3)}
      {renderStars(rating - 4)}
    </div>
  );
};

export default Rate;
