import { describe, expect, it, test } from "vitest";
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import CreateItem from './CreateItem';

test('it shows one input and a button', () => {
  // render the component
  render(<CreateItem />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure the component is doing
  // what we expect it to do
  expect(inputs).toHaveLength(1);
  expect(button).toBeInTheDocument();
});
/*
test('it calls onUserAdd when the form is submitted', () => {
  const mock = jest.fn();
  // Try to render my component
  render(<CreateItem handleCreateItem={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  // Simulate typing in a name
  user.click(nameInput);
  user.keyboard('jane');

  // Simulate typing in an email
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  // Find the button
  const button = screen.getByRole('button');

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});

*/
