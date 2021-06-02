import React from "react";
import { createPortal } from "react-dom";

interface IModalBaseProps extends React.PropsWithChildren<unknown> {
  isOpen: boolean | null;
}

const ModalBase = ({ isOpen, children }: IModalBaseProps) => {
  isOpen = isOpen || null;

  return isOpen && createPortal(children, document.body);
};

export default ModalBase;
