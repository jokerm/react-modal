import React, { PropsWithChildren } from "react";

interface IModalHeaderProps {
  closeBtn: JSX.Element | null;
}

export default function ModalHeader({
  closeBtn,
  children,
  ...props
}: PropsWithChildren<
  IModalHeaderProps & React.HTMLAttributes<HTMLDivElement>
>) {
  return (
    <div {...props}>
      {children}
      {closeBtn}
    </div>
  );
}
