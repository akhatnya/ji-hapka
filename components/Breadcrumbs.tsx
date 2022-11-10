import React from "react";

interface BreadcrumbsProps {
    className: string;
  }
const Breadcrumbs  = (props: BreadcrumbsProps) => {
    const { className } = props;
  return (
    <div className={`breadcrumbs ${className}`}>
        {/* <a href="#" className="bc-l">Главная</a>
        <a href="#" className="bc-l">Еще ссылка</a>
        <span className="active">Примерить мебель с AR</span> */}
    </div>
  );
}

export default Breadcrumbs;
