import React from 'react';
import { render, screen } from '@testing-library/react';
import MarkdownEditor from './MarkdownEditor';

test('renders MarkdownEditor component', () => {
    const mockProps = {
        content: 'Sample content',
        setContent: jest.fn(),
    };

    render(<MarkdownEditor {...mockProps} />);
    const element = screen.getByText(/Sample content/i);
    expect(element).toBeInTheDocument();
});
