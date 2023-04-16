import React from "react";
interface TitleProps {
  title: string;
  className: string;
}
const Title24 = (props: TitleProps) => {
  const { title, className } = props;
  return <h2 className={`h2-title ${className}`}>{title}</h2>;
};

export default Title24;
