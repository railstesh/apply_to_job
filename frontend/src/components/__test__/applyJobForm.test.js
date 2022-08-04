import { render, fireEvent, getByRole } from '@testing-library/react';
import ApplyJobForm from '../applyJob/ApplyJobForm';

import { BrowserRouter as Router } from 'react-router-dom';


describe('apply fob form', () => {
  const { container, getByRole, getByPlaceholderText } =  render(<Router><ApplyJobForm /></Router>);
  const handleSubmit = jest.fn();
  test("form data", ()=>{
    const f_name = getByPlaceholderText(/your name/i);
    console.log("f name", f_name)
    fireEvent.input(f_name, "abc");
    const l_name = getByPlaceholderText(/last name/i);
    fireEvent.input(l_name, "xyz");
    const email = getByPlaceholderText(/abc@gmail.com/i);
    fireEvent.input(email, "abc@gmail.com");
    const experience = getByPlaceholderText(/5/i);
    fireEvent.input(experience, "2");

    const applyButton = getByRole("button", {name: 'Apply'});
    console.log(applyButton, "apply")
    fireEvent.click(applyButton);

    const cancelButton = getByRole("button", {name: 'Cancel'});
    console.log(cancelButton, "apply")
    fireEvent.click(cancelButton);

  })
})
