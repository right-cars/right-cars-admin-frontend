import { ReactNode } from "react";

interface Props{
  children:ReactNode
}

const MAX_WIDTH = 1600;

const Container = ({ children }:Props) => {

  return (
    <section className={`max-w-[${MAX_WIDTH}px] mx-auto px-[232px]`}>
      {children}
    </section>
  );
};

export default Container;
