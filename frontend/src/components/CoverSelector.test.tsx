import React from 'react';
import { render, screen } from '@testing-library/react';
import CoverSelector from './CoverSelector';

test('renders CoverSelector component', () => {
    const mockProps = {
        open: true,
        setOpen: jest.fn(),
        setCoverImage: jest.fn(),
        client: {} as any, // Mock client object
    };

    render(<CoverSelector {...mockProps} />);
    const element = screen.getByText(/some text in CoverSelector/i);
    expect(element).toBeInTheDocument();
});
