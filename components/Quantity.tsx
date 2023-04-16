import { observer } from "mobx-react-lite";

interface QuantityProps {
  className: string;
  title: string;
  store: any;
  jihaz: any;
}
const Quantity = (props: QuantityProps) => {
  const { className, title, store, jihaz } = props;

  return (
    <div className={`quantity ${className}`}>
      <span onClick={() => store.deleteJihaz(jihaz)} className="minus">
        -
      </span>
      <span className="num">{title}</span>
      <span onClick={() => store.addJihaz(jihaz)} className="plus">
        +
      </span>
    </div>
  );
};

export default observer(Quantity);
