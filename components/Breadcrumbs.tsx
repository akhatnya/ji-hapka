import React from "react";
import Link from "next/link";

interface BreadcrumbsProps {
  className: string;
  main: string;
  link?: string;
  isMain: boolean;
  inner?: string;
}
const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { className, main, link, isMain } = props;
  return (
    <div className={`breadcrumbs ${className}`}>
      <Link href="/">Главная</Link>
      {link ? <Link href={link}>{main}</Link> : <span>{main}</span>}
      {!isMain && props?.inner && <span>{props?.inner}</span>}
    </div>
  );
};

export default Breadcrumbs;
