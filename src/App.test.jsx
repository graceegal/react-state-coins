import { beforeEach, vi, describe, test, it, expect } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App.jsx';

Math.random = vi.fn();

beforeEach(function() {
  Math.random
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});


test('renders coin flip page', function () {
  const {container} = render(<App />);
  const headerElement = screen.getByText("Flip the coin");
  expect(headerElement).toBeInTheDocument();
  expect(container.querySelector("#coin-side").textContent).toEqual("");
});

test('coin flips on button click', function() {
  const { container } = render(<App />);
  const flipBtn = container.querySelector("#flip-btn");
  fireEvent.click(flipBtn);
  expect(container.querySelector("#coin-side").textContent).toEqual("heads");
  fireEvent.click(flipBtn);
  expect(container.querySelector("#coin-side").textContent).toEqual("tails");
})

test('coin counter updates with coin flip', function() {
  const { container } = render(<App />);
  const flipBtn = container.querySelector("#flip-btn");
  fireEvent.click(flipBtn);
  expect(container.querySelector("#coin-counter").textContent).toEqual(
    "Out of 1, there have been 1 heads and 0 tails.");
  fireEvent.click(flipBtn);
  expect(container.querySelector("#coin-counter").textContent).toEqual(
    "Out of 2, there have been 1 heads and 1 tails.");
})