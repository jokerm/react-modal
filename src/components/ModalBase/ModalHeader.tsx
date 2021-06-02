import React, { PropsWithChildren } from "react";

interface IModalHeaderProps {
  closeBtn: boolean;
}

export default function ModalHeader({
  closeBtn,
  children,
  ...props
}: PropsWithChildren<IModalHeaderProps>) {
  return (
    <div {...props}>
      {children}
      {closeBtn && <button>X</button>}
    </div>
  );
}
