/** Slot repassa as props pro componente abaixo */
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  asChild?: boolean;
  children: string | ReactNode;
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        className={clsx(
          "py-4  px-3 bg-cyan-500 font-semibold text-black text-sm w-full transition-colors rounded hover:bg-cyan-300 focus:ring-2 ring-white"
        )}
      >
        {children}
      </Comp>
    </>
  );
}