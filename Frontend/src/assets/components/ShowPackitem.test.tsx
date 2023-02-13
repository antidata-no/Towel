import { describe, expect, it, test } from "vitest";
import ShowPackItem from "./ShowPackitem";
import user from '@testing-library/user-event';
import { queryAllByAttribute, queryByAttribute, queryByText, render, screen } from "@testing-library/react";

describe("ShowPackItem component", () => {

    // todo: test function handleCheckboxPackitem
  it("shows one Packitem", () => {
    const { container } = render(
      <ShowPackItem title="Title" _id="12345" checked={false} />
    );
    expect(container).toBeInTheDocument();
  });
  it("shows title with line-through if checked is true", () => {
    render(<ShowPackItem title="Title" _id="12345" checked={true} />);
    expect(screen.getByText("Title")).toHaveClass('line-through');
  });
});

