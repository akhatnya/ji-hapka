import { observer } from "mobx-react-lite";

interface TitleProps {
  title: string;
  className: string;
}
const SubTitle14 = (props: TitleProps) => {
  const { title, className } = props;
  return <p className={`subtitle-14 ${className}`}>{title}</p>;
};

export default observer(SubTitle14);
