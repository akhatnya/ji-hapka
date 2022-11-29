import InputMask from 'react-input-mask';
interface InputProps {
    type: string;
    placeholder: string;
    labelId: string;
    className: string;
    title: string;
    value?: any; 
    onChange?: any;
    name?: any;
}
const Input  = (props: InputProps) => {
    const { name, type, placeholder, labelId, className, title, value, onChange } = props;
    
  return (
    type === 'text' ? (
        <div className={`form-group ${className}`} >
          <label htmlFor={labelId}>{title}</label>
          <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} id={labelId} className="form-control" />
        </div>
    ) : (
      <div className={`form-group ${className}`} >
          <label htmlFor={labelId}>{title}</label>
          <InputMask  alwaysShowMask={true}
          id={labelId}
          name={name}
          value={value}
          type="phone"
          onChange={onChange}
          mask='7(999)999-99-99'
          className='forms-control'
          placeholder={placeholder} />
        </div>
    )
  );
}

export default Input;
