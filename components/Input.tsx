
interface InputProps {
    type: string;
    placeholder: string;
    labelId: string;
    className: string;
    title: string;
}
const Input  = (props: InputProps) => {
    const { type, placeholder, labelId, className, title } = props;
    
  return (
    <div className={`form-group ${className}`} >
        <label htmlFor={labelId}>{title}</label>
        <input type={type} placeholder={placeholder} id={labelId} className="form-control" />
    </div>
  );
}

export default Input;
