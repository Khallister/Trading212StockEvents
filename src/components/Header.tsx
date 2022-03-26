import { FunctionComponent, HTMLAttributes } from "react";

export const Header: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <header className="h-12 fixed w-full bg-white flex items-center justify-center gap-2 px-4 shadow">
      <a
        href="https://trading212.com/"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <img className="h-8" src="assets/Trading212.webp" alt="Trading 212" />
      </a>
      <a
        href="https://stockevents.app/en"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <img className="h-8" src="assets/StockEvents.webp" alt="Stock Events" />
      </a>
    </header>
  );
};
