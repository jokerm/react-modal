import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface IModalBaseProps {
  isOpen: boolean | null;
}

const ModalBase = ({
  isOpen,
  children,
  ...props
}: PropsWithChildren<
  IModalBaseProps & React.HTMLAttributes<HTMLDivElement>
>) => {
  isOpen = isOpen || null;

  return (
    isOpen && createPortal(<div {...props}>{children}</div>, document.body)
  );
};

export default ModalBase;
