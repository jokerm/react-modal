import React, { PropsWithChildren } from "react";

interface IModalFooterProps {}

export default function ModalFooter({
  children,
  ...props
}: PropsWithChildren<IModalFooterProps & React.HTMLAttributes<HTMLDivElement>>) {
  return <div {...props}>{children}</div>;
}
