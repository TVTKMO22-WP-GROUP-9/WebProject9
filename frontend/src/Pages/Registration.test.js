import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor , screen} from '@testing-library/react';
import Registration from './Registration';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';


test('renders Registration component', () => {
    render(
    <Router>
    <Registration />
    </Router>
    );

    const linkElement = screen.getByText(/Registration/i);
    expect(linkElement).toBeInTheDocument();

    //screen.debug();
});

test('renders Registration form inputs and submit button', () => {

    render(
    <Router>
    <Registration />
    </Router>
    );

    //check form inputs
    const username = screen.getByTestId('login_user');
    expect(username).toBeInTheDocument();
    
    const fname = screen.getByTestId('fname_user');
    expect(fname).toBeInTheDocument();

    const lname = screen.getByTestId('lname_user');
    expect(lname).toBeInTheDocument();

    const email = screen.getByTestId('email_user');
    expect(email).toBeInTheDocument();

    const password = screen.getByTestId('password_user');
    expect(password).toBeInTheDocument();

    const confirm_password = screen.getByTestId('confirm_password_user');
    expect(confirm_password).toBeInTheDocument();

    //check button
    const button = screen.getByTestId('registerbutton');
    expect(button).toBeInTheDocument();

});

test('Registration form - Successful registration', async () => {
    const registerUserMock = jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: 'success' });
  
    render(
    <Router>
    <Registration />
    </Router>
    );
  
    fireEvent.change(screen.getByTestId('login_user'), { target: { value: 'johnDoe' } });
    fireEvent.change(screen.getByTestId('fname_user'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('lname_user'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('email_user'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByTestId('password_user'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByTestId('confirm_password_user'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByTestId('registerbutton'));
  
    await waitFor(() => expect(registerUserMock).toHaveBeenCalledTimes(1));
  
    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(screen.queryByText(/Registration successful! Please log in./i)).toBeInTheDocument();
    screen.debug();
  });