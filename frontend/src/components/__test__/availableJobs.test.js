import { render, fireEvent } from '@testing-library/react';
import AvailableJobs from '../availableJobs/AvailableJobs';

import { BrowserRouter as Router } from 'react-router-dom';

describe('availableJobs', () => {
  const { container, queryAllByTestId } =  render(<Router><AvailableJobs /></Router>);

  test('renders AvailableJobs', () => {
    expect(container).toBeTruthy();
  });

  test('renders checkbox', () => {
    expect(queryAllByTestId('job-type')).toBeTruthy();
  });

  test('check checkbox is not checked', () => {
    const checkboxes = queryAllByTestId("checkbox");
    checkboxes.forEach((checkbox) => {
      expect(checkbox.checked).toEqual(false);
    })
  });

  test('check checkbox is checked', () => {
    const checkboxes = queryAllByTestId("checkbox");
    checkboxes.forEach((checkbox) => {
      fireEvent.click(checkbox);
    })
    checkboxes.forEach((checkbox) => {
      expect(checkbox.checked).toEqual(true);
    })
  });

})