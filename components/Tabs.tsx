interface TabProps {
  className: string;
  num?: number;
  title: string;
}
const Tabs = (props: TabProps) => {
  const { className, title, num } = props;

  return (
    <span className={`tab-link h3-title ${className}`}>
      {title}
      {/* <span className="num">{num}</span> */}
    </span>
  );
};

export default Tabs;
