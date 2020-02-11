import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cart from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("Cart Component", () => {
  let wrapper = {};
  const props = {
    count: [{ number: 1 }],
    index: 0,
    item: { text: "milk", isInCart: false },
    editItem: jest.fn(),
    removeItem: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Cart {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("button clicks work", () => {
    wrapper.find("#slashButton").simulate("click");
    wrapper.find("#removeButton").simulate("click");
    expect(props.editItem).toHaveBeenCalled();
    expect(props.removeItem).toHaveBeenCalled();
  });
});
