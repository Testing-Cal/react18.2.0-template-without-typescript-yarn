import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Listing from '../listing';

jest.mock("highcharts/highcharts-3d");

describe("<Listing />", () => {
  it("renders <Listing /> component in root", () => {
    render(<Listing />);
  });
});
