import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor , screen} from '@testing-library/react';
import Registration from './Registration';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';



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
  
    //add values to form and submit
    fireEvent.change(screen.getByTestId('login_user'), { target: { value: 'johnDoe' } });
    fireEvent.change(screen.getByTestId('fname_user'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('lname_user'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('email_user'), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByTestId('password_user'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByTestId('confirm_password_user'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByTestId('registerbutton'));
  
    //check if axios.post was called
    await waitFor(() => expect(registerUserMock).toHaveBeenCalledTimes(1));
  
    //wait a second so the success message has time to appear
    await new Promise(resolve => setTimeout(resolve, 1000));

    //check if success message is displayed
    expect(screen.queryByText(/Registration successful! Please log in./i)).toBeInTheDocument();
    
  });

test('Registration form - Failed registration (passwords dont match)', async () => {
    

    render(
    <Router>
    <Registration />
    </Router>
    );

    //add values to form and submit
    fireEvent.change(screen.getByTestId('login_user'), { target: { value: 'johnDoe' } });
    fireEvent.change(screen.getByTestId('fname_user'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('lname_user'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('email_user'), { target: { value: 'johndoe@example.com'} });
    fireEvent.change(screen.getByTestId('password_user'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByTestId('confirm_password_user'), { target: { value: 'password124' } });
    fireEvent.click(screen.getByTestId('registerbutton'));

    

    //wait a second so the error message has time to appear
    await new Promise(resolve => setTimeout(resolve, 1000));

    //check if error message is displayed
    expect(screen.queryByText(/Passwords you have entered do not match/i)).toBeInTheDocument();


    });