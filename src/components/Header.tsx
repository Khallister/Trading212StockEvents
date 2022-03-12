import { FunctionComponent, HTMLAttributes } from "react";

export const Header: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <header className="h-12 flex items-center px-4 bg-gray-200 shadow">
      {children}
    </header>
  );
};
