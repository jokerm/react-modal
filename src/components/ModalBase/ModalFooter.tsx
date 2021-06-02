import React, { PropsWithChildren } from "react";

interface IModalFooterProps {}

export default function ModalFooter({
  children,
  ...props
}: PropsWithChildren<IModalFooterProps>) {
  return <div {...props}>{children}</div>;
}
