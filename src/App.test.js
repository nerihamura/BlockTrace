// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockTrace title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockTrace/i);
    expect(titleElement).toBeInTheDocument();
});
