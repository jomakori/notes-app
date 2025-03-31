import React from "react";
import { render, screen } from "@testing-library/react";

// Use jest.mock with path relative to the test file
jest.mock("../components/MarkdownEditor");

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
