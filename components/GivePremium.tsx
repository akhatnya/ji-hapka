
interface TabProps {
    className: string;
}
const GivePremium  = (props: TabProps) => {
    const { className } = props;
    
  return (
    <span className={`give-premium ${className}`}>
        
        <svg viewBox="0 0 22 22">
            <use href='/images/icons/star-full.svg#root'></use>
        </svg>
        Premium

    </span>
  );
}

export default GivePremium;
