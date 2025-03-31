import React from "react";
import { render, screen } from "@testing-library/react";
import MarkdownEditor from "./MarkdownEditor";

// Mock all Milkdown imports in one place
jest.mock("@milkdown/react", () => {
  let editorCallback;
  return {
    useEditor: (callback) => {
      editorCallback = callback;
      return {
        get: () => ({ state: {} }),
      };
    },
    Milkdown: ({ children }) => {
      React.useEffect(() => {
        if (editorCallback) {
          const div = document.createElement("div");
          div.setAttribute("role", "textbox");
          editorCallback(div);
        }
      }, []);
      return <div role="textbox">{children}</div>;
    },
  };
});

jest.mock("@milkdown/core", () => ({
  defaultValueCtx: jest.fn(),
  rootCtx: jest.fn(),
  Editor: {
    make: () => ({
      config: (fn) => ({
        use: jest.fn().mockReturnThis(),
      }),
    }),
  },
}));

jest.mock("@milkdown/preset-commonmark", () => ({
  commonmark: jest.fn(),
}));

jest.mock("@milkdown/plugin-listener", () => ({
  listener: jest.fn(),
  listenerCtx: {
    markdownUpdated: jest.fn(),
  },
}));

test("renders MarkdownEditor component", () => {
  const mockProps = {
    content: "Sample content",
    setContent: jest.fn(),
  };

  render(<MarkdownEditor {...mockProps} />);
  const editor = screen.getByRole("textbox");
  expect(editor).toBeInTheDocument();
});
