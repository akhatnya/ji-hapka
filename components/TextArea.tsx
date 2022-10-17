
interface InputProps {
    className: string;
    placeholder: string;
    qtyRow: number;
}
const TextArea  = (props: InputProps) => {
    const { placeholder, className, qtyRow } = props;
    
  return (
    <div className={`form-group ${className}`} >
        <textarea placeholder={placeholder} className="form-control" rows={qtyRow}></textarea>
    </div>
  );
}

export default TextArea;
