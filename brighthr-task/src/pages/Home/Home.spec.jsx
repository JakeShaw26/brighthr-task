import { render, screen } from '@testing-library/react';
import Home from './Home';
import { fileData } from '../../data';

describe('Home', () => {

    it('should render the component', () => {
        render(<Home />);
        expect(screen.getByText('BrightHR Task')).toBeInTheDocument();
    })

    it('should display all the files in the list of data', () => {
        render(<Home dataSource={fileData} />);
        expect(screen.getByText('Employee Handbook')).toBeVisible();
        const allObjects = screen.getAllByTestId('data-obj');
        expect(allObjects.length).toBe(fileData.length);
    });

});
