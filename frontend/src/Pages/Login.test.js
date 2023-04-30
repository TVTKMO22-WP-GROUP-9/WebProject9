import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor , screen} from '@testing-library/react';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';


/*jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (path) => ({ pathname: path }),
  }));
*/
test('renders Login form inputs and submit button', () => {

    render(
    <Router>
    <Login />
    </Router>
    );

    //check form inputs
    const username = screen.getByTestId('login_user');
    expect(username).toBeInTheDocument();
    
    const password = screen.getByTestId('password_user');
    expect(password).toBeInTheDocument();

    //check button
    const button = screen.getByTestId('loginbutton');
    expect(button).toBeInTheDocument();

});

test('Login form - Successful login', async () => {
    const mockResponse = {
      data: {
        token: 'abc123',
        user_id: 1,
      },
    };
  
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve(mockResponse));
  
    

    render(
      <Router>
        <Login />
      </Router>
    );
  
    const username = screen.getByTestId('login_user');
    const password = screen.getByTestId('password_user');
    const button = screen.getByTestId('loginbutton');
  
    fireEvent.change(username, { target: { value: 'testuser' } });
    fireEvent.change(password, { target: { value: 'testpassword' } });
    fireEvent.click(button);
  
    await waitFor(() => expect(localStorage.getItem('token')).toEqual('abc123'));
    await waitFor(() => expect(localStorage.getItem('user_id')).toEqual('1'));
    await waitFor(() => expect(localStorage.getItem('user_name')).toEqual('testuser'));

    
  });

  test('Login form - Unsuccessful login', async () => {
    const { getByTestId } = render(
      <Router>
        <Login />
      </Router>
    );
  
    // mock the axios.post method to return a rejected promise
    axios.post.mockRejectedValue(new Error('Fake error'));
  
    // fill in the form with incorrect username and password
    const username = getByTestId('login_user');
    fireEvent.change(username, { target: { value: 'wrongusername' } });
    const password = getByTestId('password_user');
    fireEvent.change(password, { target: { value: 'wrongpassword' } });
  
    // click the login button
    const button = getByTestId('loginbutton');
    fireEvent.click(button);
  
    // wait for the responseText to appear
    const responseText = await waitFor(() => getByTestId('response_text'));
    expect(responseText).toHaveTextContent('Login failed');
  
    // reset the mock to the original implementation
    axios.post.mockRestore();
  });