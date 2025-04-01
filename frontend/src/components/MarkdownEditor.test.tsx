import React from "react";
import { render, screen } from "@testing-library/react";

// Mock the MarkdownEditor component
jest.mock("./MarkdownEditor");

import MarkdownEditor from "./MarkdownEditor";

describe("MarkdownEditor", () => {
  it("renders with content", () => {
    const props = {
      content: "Test content",
      setContent: jest.fn(),
    };

    render(<MarkdownEditor {...props} />);
    const editor = screen.getByTestId("markdown-editor");
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveTextContent("Test content");
  });
});
