import { PropsWithChildren, useState } from "react";
import styles from "./CSSTransition.module.css";

interface ICSSTransitionState {
  exiting?: boolean;
  open: boolean;
  active?: boolean;
}

interface ICSSTransitionProps {
  open: boolean;
  onEnter?: () => void;
  onExit?: () => void;
  timeout: number;
  type: "fade" | "slideUp";
}

export default function CSSTransition({
  open,
  onEnter,
  onExit,
  timeout = 200,
  type = "fade",
  children,
}: PropsWithChildren<ICSSTransitionProps>) {
  const [state, setState] = useState<ICSSTransitionState>({ open });

  const clsx = `${styles.enter} ${}`;

  return open && <div className={clsx}>{children}</div>;
}
