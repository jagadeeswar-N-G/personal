import clsx from "clsx";
interface ContainerT {
    as?:any,
    Component?: any,
    className?: string,
    children?: React.ReactNode
}
const Container = ({ as: Component = "div", className, children }:ContainerT) => {
  return (
    <Component className={clsx("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
