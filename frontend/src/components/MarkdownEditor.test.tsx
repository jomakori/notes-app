import React from "react";
import { render, screen } from "@testing-library/react";
import MarkdownEditor from "./MarkdownEditor";

// Mock @milkdown modules
jest.mock('@milkdown/react', () => ({
  Milkdown: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useEditor: () => ({ get: () => ({ state: {} }) }),
}));

jest.mock('@milkdown/core', () => ({
  defaultValueCtx: jest.fn(),
  rootCtx: jest.fn(),
}));

jest.mock('@milkdown/preset-commonmark', () => ({
  commonmark: jest.fn(),
}));

test("renders MarkdownEditor component", () => {










});  expect(editor).toBeInTheDocument();  const editor = screen.getByRole("textbox");  render(<MarkdownEditor {...mockProps} />);  };    setContent: jest.fn(),    content: "Sample content",  const mockProps = {
