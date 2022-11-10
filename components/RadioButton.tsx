
interface RadioProps {
    type: string;
    labelId: string;
    className: string;
    name: string;
    title: string;
    classActive: string;
    svgIcon: string;
    value?: any;
    checked?: any
    onChange?: any
}
const RadioButton  = (props: RadioProps) => {
    const {onChange, value, type, name, labelId, className, title, classActive, svgIcon, checked } = props;
    
  return (
    <div className={`radio-default ${className}`}>
        <input
        type={type}
        id={labelId}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        />
        
        <label htmlFor={labelId}>
            <span className={`${classActive}`}>
                <svg height="24" width="24">
                    <use href={`${svgIcon}`}></use>
                </svg>
            </span>
            <span>{title}</span>
        </label>
    </div>
  );
}

export default RadioButton;
