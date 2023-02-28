import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

export const Modal = ({ isOpen, closeModal, children }: Props) => {
  if(!isOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={closeModal}/>
      <div className="modal">
        {children}
      </div>
    </>
  );
};