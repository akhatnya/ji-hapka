interface ReviewQtyProps {
  num: string;
  className: string;
}

const ReviewQty = (props: ReviewQtyProps) => {
  const { num, className } = props;
  return <span className={`review-qty ${className}`}>{num} отзыва</span>;
};

export default ReviewQty;
