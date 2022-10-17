
interface RadioProps {
    type: string;
    labelId: string;
    className: string;
    name: string;
    title: string;
    classActive: string;
    svgIcon: string;
}
const RadioButton  = (props: RadioProps) => {
    const { type, name, labelId, className, title, classActive, svgIcon } = props;
    
  return (
    <div className={`radio-default ${className}`}>
        <input
        type={type}
        id={labelId}
        name={name}
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
