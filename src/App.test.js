import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper = {};

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("displays initial to-dos", () => {
    expect(wrapper.find("Cart")).toHaveLength(2);
  });

  it("adds a new item when submitted", () => {
    const wrapper = mount(<App />);

    wrapper.find("select").simulate("change", { target: { value: "2" } });
    wrapper.find("input").simulate("change", { target: { value: "apples" } });
    wrapper.find("#form").at(1).simulate("submit");
    expect(wrapper.find("#itemInfo").last().text()).toEqual("2 apples");
    wrapper.unmount();
  });
  
  it("removes an item", () => {
    const wrapper = mount(<App />);

    wrapper.find('#removeButton').hostNodes().at(1).simulate('click')
    expect(wrapper.find('Cart')).toHaveLength(1);
    wrapper.unmount();
  });
});
