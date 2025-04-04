import React from "react";

type EditorCallback = (dom: HTMLElement) => void;

export const useEditor = (callback: EditorCallback) => {
  callback(document.createElement("div"));
  return { get: () => ({ state: {} }) };
};

interface ProviderProps {
  children: React.ReactNode;
}

export const MilkdownProvider = React.forwardRef<HTMLDivElement, ProviderProps>(
  ({ children }, ref) => <div ref={ref}>{children}</div>
);

export const Milkdown = React.forwardRef<HTMLDivElement, ProviderProps>(
  ({ children }, ref) => (
    <div ref={ref} role="textbox">
      {children}
    </div>
  )
);

export const defaultValueCtx = jest.fn();
export const rootCtx = jest.fn();
export const commonmark = jest.fn();
export const listener = jest.fn();
export const listenerCtx = {
  markdownUpdated: jest.fn(),
};

export const Editor = {
  make: () => ({
    config: (fn: (ctx: any) => void) => {
      fn({
        set: jest.fn(),
        get: () => ({ markdownUpdated: jest.fn() }),
      });
      return { use: jest.fn().mockReturnThis() };
    },
  }),
};

MilkdownProvider.displayName = "MilkdownProvider";
Milkdown.displayName = "Milkdown";
