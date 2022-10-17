
interface TitleProps {
  title: string;
  className: string;
}
const Title20  = (props: TitleProps) => {
  const { title, className } = props;
  return (
    <h3 className={`h3-title ${className}`}>
        {title}
    </h3>
  );
}

export default Title20;
