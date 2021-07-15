import React, { PropsWithChildren, ReactElement } from "react";

import { ModalBase, ModalBody } from "components/ModalBase";
import useChildProps from "utils/useChildProps";
import ModalHeader from "components/ModalBase/ModalHeader";
import ModalFooter from "components/ModalBase/ModalFooter";

interface IModalProps {
  onClose: () => void;
  children: ReactElement[];
}

const allowedElements = ["header", "body", "footer"];

export default function Modal({
  onClose,
  children,
}: PropsWithChildren<IModalProps>) {
  const { header, body, footer } = useChildProps(children, allowedElements);

  const closeBtn = onClose ? (
    <button onClick={onClose} className="delete" aria-label="close"></button>
  ) : null;

  return (
    <ModalBase className="modal is-active" isOpen={true}>
      <div className="modal-background"></div>
      <div className="modal-card">
        {header && (
          <ModalHeader
            className="modal-card-head"
            closeBtn={closeBtn}
            {...header}
            children={<p className="modal-card-title">{header.children}</p>}
          />
        )}
        {body && <ModalBody className="modal-card-body" {...body} />}
        {footer && <ModalFooter className="modal-card-foot" {...footer} />}
      </div>
    </ModalBase>
  );
}
