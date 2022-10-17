
interface TitleProps {
    title: string;
    className: string;
  }
  const SubTitle14  = (props: TitleProps) => {
    const { title, className } = props;
    return (
      <p className={`subtitle-14 ${className}`}>
          {title}
      </p>
    );
  }
  
  export default SubTitle14;
  