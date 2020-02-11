import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemForm from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Form Component", () => {
  let wrapper = {};

  beforeEach(() => {
    wrapper = shallow(<ItemForm />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("should enter info with ENTER key", () => {
    const component = mount(<ItemForm />);
    
    component.find("#form").at(1).simulate("keydown", { keyCode: 13 });
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it("updates on change", () => {
    const wrapper = mount(<ItemForm />);

    wrapper.find("select").simulate("change", { target: { value: "2" } });
    wrapper.find("input").simulate("change", { target: { value: "oranges" } });
    expect(wrapper.find("select").instance().value).toEqual("2");
    expect(wrapper.find("input").instance().value).toEqual("oranges");
  });
});
