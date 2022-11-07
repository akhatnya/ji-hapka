import { observer } from "mobx-react-lite";
import React from "react";

interface CatProps {
    title: string;
    srcImage: string;
    className?: string;
    num?: string;
    onClick?: any;
  }
const Category  = (props: CatProps) => {
    const { title, srcImage, className, num } = props;
  return (
    <div className={`cat-tab ${className}`} onClick={props.onClick ? props.onClick : () => {}}>
        <img src={`${srcImage}`} />
        <span className="cat-text">{title} <span className="cat-num">{num}</span></span>
    </div>
  );
}

export default observer(Category);
