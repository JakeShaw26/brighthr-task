import { render, screen } from '@testing-library/react';
import { Home } from '../pages/home';

test('should render', () => {
    render(<Home />);
    expect(screen.getByText('BrightHR Task')).toBeInTheDocument();
})