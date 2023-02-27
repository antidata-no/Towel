import { describe, expect, it, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CreateCategory from './CreateCategory';
import { ICategory, IPackitem } from "../interfaces/Interfaces";

const testitem: IPackitem = {
	title: "Testitem",
	_id: "1",
	checked: false,
};

const testcategory: ICategory = {
	title: "Test",
	_id: "0",
	items: [testitem],
};

test("it shows one input and a button", () => {
	render(<CreateCategory/>);

	const inputs = screen.getAllByRole("textbox");
	const button = screen.getByRole("button");

	expect(inputs).toHaveLength(1);
	expect(button).toBeInTheDocument();
});

test("it empties form field after click", () => {
    
    vi.mock('../api/apiCreateCategory');

	render(<CreateCategory />);

	const input = screen.getByRole("textbox");
	const button = screen.getByRole("button");

	fireEvent.change(input,{target: {value: "Test"}});
	fireEvent.click(button);
    
	expect(input).toHaveValue("");
});
