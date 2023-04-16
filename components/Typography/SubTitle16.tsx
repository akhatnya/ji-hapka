interface TitleProps {
  title: string;
  className: string;
}
const SubTitle16 = (props: TitleProps) => {
  const { title, className } = props;
  return <p className={`subtitle-16 ${className}`}>{title}</p>;
};

export default SubTitle16;
