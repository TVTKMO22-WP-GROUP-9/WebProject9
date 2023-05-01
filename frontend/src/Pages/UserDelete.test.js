import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor , screen } from '@testing-library/react';
import UserPage from './UserPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';


//mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});


//mock offcanvas
jest.mock('react-bootstrap', () => ({
  ...jest.requireActual('react-bootstrap'),
  Offcanvas: jest.fn(({ show, onHide, children }) => (
    show ? <div>{children}</div> : null
  )),
}));





test('can delete user', async () => {
    //render userpage
    render (
        <Router>
          <UserPage />
        </Router>
    );
    
    //find button with testid deletebutton
    const button = screen.getByTestId('deletebutton');
    expect(button).toBeInTheDocument();

    //click button
    fireEvent.click(button);

    //debug screen
    screen.debug();
    
    //check if text Are you sure you want to delete your account? is in the document
    const text = await screen.findByText('Are you sure you want to delete your account?');
    
    //check if button with testid deletebutton2 is in the document
   // const button2 = await screen.findByTestId('deletebutton2');
   //expect(button2).toBeInTheDocument();
});