import React, { PropsWithChildren, ReactElement } from "react";

import { ModalBase, ModalBody } from "components/ModalBase";
import useChildProps from "utils/useChildProps";
import ModalHeader from "components/ModalBase/ModalHeader";
import ModalFooter from "components/ModalBase/ModalFooter";

interface IModalProps {
  showCloseBtn: boolean;
  children: ReactElement[];
}

const allowedElements = ["header", "section", "footer"];

export default function Modal({
  showCloseBtn,
  children,
}: PropsWithChildren<IModalProps>) {
  const { header, section, footer } = useChildProps(children, allowedElements);

  return (
    <ModalBase isOpen={true}>
      <ModalHeader closeBtn={showCloseBtn} {...header} />
      <ModalBody {...section} />
      <ModalFooter {...footer} />
    </ModalBase>
  );
}
