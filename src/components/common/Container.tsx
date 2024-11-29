import { ReactNode } from "react";

interface Props{
  children:ReactNode
}

const Container = ({ children }:Props) => {
  const maxWidth = 1600;

  return (
    <section className={`max-w-[${maxWidth}px] mx-auto px-[232px]`}>
      {children}
    </section>
  );
};

export default Container;
