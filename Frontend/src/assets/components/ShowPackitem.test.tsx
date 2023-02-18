import { describe, expect, it, test } from "vitest";
import ShowPackItem from "./ShowPackitem";
import user from '@testing-library/user-event';
import { queryAllByAttribute, queryByAttribute, queryByText, render, screen } from "@testing-library/react";
import { IPackitem } from "../interfaces/Interfaces";

describe("ShowPackItem component", () => {


  let packitem: IPackitem = {
    title: "Title",
     _id: "12345",
      checked: false 
    };
    // todo: test function handleCheckboxPackitem
  it("shows one Packitem", () => {
    const { container } = render(
      <ShowPackItem categoryid="0"  packitem={packitem}/>
    );
    //screen.logTestingPlaygroundURL();
    expect(container).toBeInTheDocument();
  });
  packitem.checked = true;
  it("shows title with line-through if checked is true", () => {
    render(<ShowPackItem categoryid="1" packitem={packitem} />);
    expect(screen.getByText("Title")).toHaveClass('line-through');
  });
});

