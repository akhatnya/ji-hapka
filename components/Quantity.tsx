
interface QuantityProps {
    className: string;
    title: string;
}
const Quantity  = (props: QuantityProps) => {
    const { className, title } = props;
    
  return (
    <div className={`quantity ${className}`} >
        <span className="minus">-</span>
        <span className="num">{title}</span>
        <span className="plus">+</span>
    </div>
  );
}

export default Quantity;
