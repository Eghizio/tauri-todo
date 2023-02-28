import { useState } from "react";

export const useDisclosure = (initialyOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialyOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(p => !p);

  return { isOpen, open, close, toggle };
};
