import React, { PropsWithChildren } from "react";

interface IModalBodyProps {}

export default function ModalBody({
  children,
  ...props
}: PropsWithChildren<IModalBodyProps>) {
  return <div {...props}>{children}</div>;
}
