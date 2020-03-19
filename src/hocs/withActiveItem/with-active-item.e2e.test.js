import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Если пользователь наводит мышкой на элемент, обновляется состояние стейта`, () => {
  const wrapper = shallow(<MockComponentWrapped onHover={() => {}} onSelect={() => {}} />);

  expect(wrapper.state()).toEqual({activeHoveredItem: null, activeSelectedItem: null});

  wrapper.props().onHover(1);
  expect(wrapper.state().activeHoveredItem).toBe(1);

  wrapper.props().onSelect(2);
  expect(wrapper.state().activeSelectedItem).toBe(2);
});
