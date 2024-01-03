import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import "jest-enzyme";
import Home from "../home";
jest.mock("highcharts/highcharts-3d");

Enzyme.configure({ adapter: new Adapter() });
describe("<Home />", () => {
  it("renders <Home /> component in root", () => {
    shallow(<Home />);
  });
});
