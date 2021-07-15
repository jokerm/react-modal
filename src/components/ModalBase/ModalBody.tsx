import React, { PropsWithChildren } from "react";

interface IModalBodyProps {}

export default function ModalBody({
  children,
  ...props
}: PropsWithChildren<IModalBodyProps & React.HTMLAttributes<HTMLDivElement>>) {
  return <div {...props}>{children}</div>;
}
