/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import ReserveForm from "./components/ReserveForm";
import React from "react";

describe("Reserve Form", () => {
  test("User is able to submit the form if all fields are filled", async () => {
    const firstName = 'First';
    const lastName = 'Last';
    const email = 'email@email.com';
    const date = '2023-10-10';
    const time = '12:00';
    const numberOfGuest = '4';
    const occasion = 'birthday';
    const message = '';
    
    const handleSubmit = jest.fn();
    render(<ReserveForm onSubmit={handleSubmit}/>);
    
    fireEvent.change(screen.getByLabelText('First name'), {target: {value: firstName}});
    fireEvent.change(screen.getByLabelText('Last name'), {target: {value: lastName}});
    fireEvent.change(screen.getByLabelText('Email'), {target: {value: email}});
    fireEvent.change(screen.getByLabelText('Choose Date'), {target: {value: date}});
    fireEvent.change(screen.getByLabelText('Choose Time'), {target: {value: time}});
    fireEvent.change(screen.getByLabelText('Number of guests'), {target: {value: numberOfGuest}});
    fireEvent.change(screen.getByLabelText('Occasion'), {target: {value: occasion}});
    fireEvent.change(screen.getByLabelText('Additional requests'), {target: {value: message}});
    
    fireEvent.click(screen.getByRole("button"));
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName,
        lastName,
        email,
        date,
        time,
        numberOfGuest,
        occasion,
        message
      });
    });
  });
  
  test('Failure test', async () => {
    const firstName = '';
    const lastName = '';
    const email = 'email@';
    const date = '';
    const time = '';
    const numberOfGuest = '';
    const occasion = '';
    const message = '';
    
    const handleSubmit = jest.fn();
    render(<ReserveForm onSubmit={handleSubmit}/>);
    
    fireEvent.change(screen.getByLabelText('First name'), {target: {value: firstName}});
    fireEvent.change(screen.getByLabelText('Last name'), {target: {value: lastName}});
    fireEvent.change(screen.getByLabelText('Email'), {target: {value: email}});
    fireEvent.change(screen.getByLabelText('Choose Date'), {target: {value: date}});
    fireEvent.change(screen.getByLabelText('Choose Time'), {target: {value: time}});
    fireEvent.change(screen.getByLabelText('Number of guests'), {target: {value: numberOfGuest}});
    fireEvent.change(screen.getByLabelText('Occasion'), {target: {value: occasion}});
    
    fireEvent.click(screen.getByRole("button"));
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName,
        lastName,
        email,
        date,
        time,
        numberOfGuest,
        occasion,
        message
      });
      
      expect(screen.getByText('Required First name')).toBeVisible();
      expect(screen.getByText('Required Last name')).toBeVisible();
      expect(screen.getByText('Invalid email address')).toBeVisible();
      expect(screen.getByText('Date is a required field')).toBeVisible();
      expect(screen.getByText('Please choose the available time')).toBeVisible();
      expect(screen.getByText('Guests number is required')).toBeVisible();
      expect(screen.getByText('Occasion is required')).toBeVisible();
    });
  });
});
