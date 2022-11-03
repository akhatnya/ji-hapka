
interface QuantityProps {
    className: string;
    title: string;
    setBasket: () => void;
}
const Quantity  = (props: QuantityProps) => {
    const { className, title, setBasket } = props;

  const handlePlus = () => {
    if(basket)
  }
    
  return (
    <div className={`quantity ${className}`} >
        <span onClick={() => {setBasket()}} className="minus">-</span>
        <span className="num">{title}</span>
        <span className="plus">+</span>
    </div>
  );
}

export default Quantity;
