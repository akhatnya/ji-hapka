interface ShowImageProps {
  thumbImage: string;
  activeImage: string;
  onClick?: any;
}

const ThumbImage = (props: ShowImageProps) => {
  const { thumbImage, activeImage, onClick } = props;
  return (
    <div
      className={`img ${activeImage}`}
      onClick={onClick}
      style={{ backgroundImage: `${thumbImage}` }}
    ></div>
  );
};

export default ThumbImage;
