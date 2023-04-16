interface BtnBackProps {
  className: string;
}
const BtnBack = (props: BtnBackProps) => {
  const { className } = props;

  return (
    <span className={`back-button ${className}`}>
      <svg height="24" width="24">
        <use href={`/images/icons/arrow-left-24.svg#root`}></use>
      </svg>
      Вернуться к покупкам
    </span>
  );
};

export default BtnBack;
