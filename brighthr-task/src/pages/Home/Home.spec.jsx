import { fireEvent, getByRole, render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { fileData } from '../../data';

describe('Home', () => {

    it('should render the component', () => {
        render(<Home dataSource={fileData} />);
        expect(screen.getByText('BrightHR Task')).toBeInTheDocument();
    })

    it('should display all the files in the list of data', () => {
        render(<Home dataSource={fileData} />);
        expect(screen.getByText('Employee Handbook')).toBeVisible();
        const allDocuments = screen.getAllByRole('document');
        const allDirectories = screen.getAllByRole('directory');
        const allItems = allDirectories.length + allDocuments.length;
        expect(allItems).toBe(fileData.length);
    });

    it('should display three files and two folders', () => {
        render(<Home dataSource={fileData} />);
        const allDocuments = screen.getAllByRole('document');
        const allDirectories = screen.getAllByRole('directory');
        expect(allDocuments.length).toBe(3);
        expect(allDirectories.length).toBe(2);
    });

    it('should show items within the directory when clicked', async () => {
        render(<Home dataSource={fileData} />);
        const expensesFolder = screen.getByText('Expenses');
        const miscFolder = screen.getByText('Misc');
        fireEvent.click(expensesFolder);
        fireEvent.click(miscFolder);
        const expensesSubDir = screen.getByText('Expenses claim form');
        const miscSubDir = screen.getByText('Christmas party');
        expect(expensesSubDir).toBeVisible();
        expect(miscSubDir).toBeVisible();
    });
});
