import { render } from '@testing-library/react';
import App from './App';

test('renders truthy comp', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeTruthy();
});
