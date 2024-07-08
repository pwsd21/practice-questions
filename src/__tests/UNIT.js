import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Group of tests for the Basic React Form component
describe("Basic React Form", () => {
  // Test to check if the form renders with initial state values
  test("renders the form with initial state", () => {
    // Render the App component
    render(<App />);
    // Check if the Name input field has an initial value of an empty string
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    // Check if the Email input field has an initial value of an empty string
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
  });

  // Test to check if the user can enter name and email values in the form
  test("allows user to enter name and email", () => {
    // Render the App component
    render(<App />);
    // Simulate user typing "John Doe" into the Name input field
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    // Simulate user typing "john@example.com" into the Email input field
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    // Check if the Name input field has the value "John Doe"
    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    // Check if the Email input field has the value "john@example.com"
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
  });

  // Test to check if the form displays submitted data upon form submission
  test("displays submitted data upon form submission", () => {
    // Render the App component
    render(<App />);
    // Simulate user typing "John Doe" into the Name input field
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    // Simulate user typing "john@example.com" into the Email input field
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    // Simulate user clicking the Submit button
    fireEvent.click(screen.getByText(/submit/i));
    // Check if the form submission message is displayed
    expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
    // Check if the submitted Name value is displayed
    expect(screen.getByText(/name: john doe/i)).toBeInTheDocument();
    // Check if the submitted Email value is displayed
    expect(screen.getByText(/email: john@example.com/i)).toBeInTheDocument();
  });

  // Test to check if the form prevents submission with empty fields
  test("prevents form submission with empty fields", () => {
    // Render the App component
    render(<App />);
    // Simulate user clicking the Submit button without filling the fields
    fireEvent.click(screen.getByText(/submit/i));
    // Check if the form submission message is not displayed
    expect(screen.queryByText(/form submitted/i)).not.toBeInTheDocument();
  });

  // Test to check if the form resets after submission (Note: this functionality is not implemented in the provided form)
  test("resets form after submission", () => {
    // Render the App component
    render(<App />);
    // Simulate user typing "John Doe" into the Name input field
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    // Simulate user typing "john@example.com" into the Email input field
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    // Simulate user clicking the Submit button
    fireEvent.click(screen.getByText(/submit/i));
    // Check if the Name input field is reset to an empty string
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    // Check if the Email input field is reset to an empty string
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
  });
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
