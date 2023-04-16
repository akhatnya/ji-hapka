import { observer } from "mobx-react-lite";
import React from "react";
interface ButtonProps {
  onClick?: () => void;
  title: string;
  className: string;
  sizeIcon?: string;
  svgIcon?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
}

const Button = (props: ButtonProps) => {
  const { onClick, title, className, sizeIcon, svgIcon, iconRight, iconLeft } =
    props;

  return (
    <button
      onClick={onClick ? () => onClick() : () => {}}
      className={`${className}`}
    >
      {iconLeft && (
        <svg
          viewBox={`0 0 ${sizeIcon} ${sizeIcon}`}
          style={{ width: `${sizeIcon}` }}
        >
          <use href={svgIcon}></use>
        </svg>
      )}
      {title}
      {iconRight && (
        <svg
          viewBox={`0 0 ${sizeIcon} ${sizeIcon}`}
          style={{ width: `${sizeIcon}` }}
        >
          <use href={svgIcon}></use>
        </svg>
      )}
    </button>
  );
};

export default observer(Button);
