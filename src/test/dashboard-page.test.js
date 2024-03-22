import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import "jest-enzyme";
import Dashboard from "../dashboard";

jest.mock("highcharts/highcharts-3d");

Enzyme.configure({ adapter: new Adapter() });
describe("<Dashboard />", () => {
  it("renders <Dashboard /> component in root", () => {
    shallow(<Dashboard />);
  });
});
