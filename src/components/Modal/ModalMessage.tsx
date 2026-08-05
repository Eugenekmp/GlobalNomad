import type { ReactNode } from "react";

interface ModalMessageProps {
  children: ReactNode;
}

const ModalMessage = ({ children }: ModalMessageProps) => (
  <p className="text-center text-16-bold md:text-18-bold whitespace-pre-line">
    {children}
  </p>
);

export default ModalMessage;
