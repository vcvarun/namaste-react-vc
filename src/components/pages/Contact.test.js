import { render, screen } from "@testing-library/react";
import { Contact } from "./Contact";
import "@testing-library/jest-dom";

test("To check if Contact Page rendered correctly", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
    
});

test("shoud render submit button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("should render all the input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
});