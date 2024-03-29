import clsx from "clsx";
import Link from "next/link";

interface LogoT {
  invert?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const Logo = ({ invert, href, className, children, ...props }: LogoT) => {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-orange-600" : "text-black hover:text-orange-600"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
