import React from "react";
import { render, screen } from "@testing-library/react";
import MarkdownEditor from "../src/components/MarkdownEditor";

describe("MarkdownEditor", () => {
  it("renders with content", async () => {
    const props = {
      content: "Test content",
      setContent: jest.fn(),
    };

    render(<MarkdownEditor {...props} />);
    const editor = await screen.findByTestId("markdown-editor");
    expect(editor).toBeInTheDocument();
    expect(editor).toHaveTextContent("Test content");
  });
});
