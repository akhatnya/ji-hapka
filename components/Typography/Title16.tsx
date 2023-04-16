interface TitleProps {
  title: string;
  className: string;
}
const Title16 = (props: TitleProps) => {
  const { title, className } = props;
  return <h4 className={`h4-title ${className}`}>{title}</h4>;
};

export default Title16;
