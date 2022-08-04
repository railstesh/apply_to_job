import { render } from '@testing-library/react';
import Header from '../Header'

describe('header', () => {
  const { container, getByTestId } =  render(<Header />);

  test('renders header', () => {
    expect(container).toBeTruthy();
  });

})