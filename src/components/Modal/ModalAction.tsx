import type { ReactNode } from "react";

interface ModalActionProps {
  children: ReactNode;
}

const ModalAction = ({ children }: ModalActionProps) => (
  <div className="flex gap-2 md:gap-3 justify-center items-center">
    {children}
  </div>
);

export default ModalAction;
