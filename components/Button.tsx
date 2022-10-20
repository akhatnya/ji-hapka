import React from "react";
interface ButtonProps {
  title: string;
  className: string;
  sizeIcon?: string;
  svgIcon?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  onClick?: any
}

const Button = (props: ButtonProps) => {
  const { title, className, sizeIcon, svgIcon, iconRight, iconLeft } = props;

  return (
    <button onClick={props.onClick} className={`${className}`}>
      {
        iconLeft &&
        <svg viewBox={`0 0 ${sizeIcon} ${sizeIcon}`} style={{ width: `${sizeIcon}` }}>
          <use href={svgIcon}></use>
        </svg>
      }
      {title}
      {
        iconRight &&
        <svg viewBox={`0 0 ${sizeIcon} ${sizeIcon}`} style={{ width: `${sizeIcon}` }}>
          <use href={svgIcon}></use>
        </svg>
      }
    </button>
  );
}

export default Button;
