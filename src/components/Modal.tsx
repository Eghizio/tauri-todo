import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: Props) => {
  if(!isOpen) return null;

  return createPortal(
    <>
      <div className="backdrop" onClick={closeModal}/>
      <div className="modal">
        {children}
      </div>
    </>
  , document.querySelector("#modal-root") as HTMLElement);
};