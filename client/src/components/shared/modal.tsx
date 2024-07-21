import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalComponentProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return ReactDOM.createPortal(
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        onClick={onClose}
        ref={nodeRef}
        className="fixed z-[999] w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center left-0 top-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative shadow-[0_10px_5px_2px_rgba(0,0,0,0.1)] w-fit"
        >
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal")!
  );
};
