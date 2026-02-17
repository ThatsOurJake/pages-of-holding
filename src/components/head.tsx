import type { ComponentChildren } from "preact";
import { createPortal } from "preact/compat";

interface HeadProps {
  children: ComponentChildren;
}

export const Head = ({ children }: HeadProps) => {
  if (typeof document === 'undefined') {
    return null; // SSR guard
  }

  return createPortal(children, document.head);
};
