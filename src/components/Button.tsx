import Link from "next/link";
import clsx from "clsx";
import React from "react";


interface ButtonT {
    invert: boolean,
    href?: string,
    className?: string,
    children: React.ReactNode
}
const Button = ({ invert, href, className, children, ...props }: ButtonT) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
