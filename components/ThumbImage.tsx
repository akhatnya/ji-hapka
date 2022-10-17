interface ShowImageProps {
    thumbImage: string;
    activeImage: string;
}
  
  const ThumbImage = (props: ShowImageProps) => {
    const { thumbImage, activeImage } = props;
    return (
        <div className={`img ${activeImage}`} style={{ backgroundImage: `${thumbImage}` }}></div>
    );
  };
  
  export default ThumbImage;
  