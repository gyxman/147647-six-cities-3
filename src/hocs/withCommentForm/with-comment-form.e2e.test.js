import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withCommentForm from "./with-comment-form";

configure({adapter: new Adapter()});

const MockComponent = () => <div/>;
const MockComponentWrapped = withCommentForm(MockComponent);

describe(`Тестирование компонента обертки для формы отправки отзыва`, () => {
  it(`Если пользователь изменяет рейтинг, то обновляем состояние стейта`, () => {
    const wrapper = shallow(<MockComponentWrapped id={0} addComment={() => {}}/>);

    expect(wrapper.state()).toEqual({
      rating: 0,
      comment: ``,
      error: ``,
      success: ``,
      disabled: false,
    });

    wrapper.props().onRatingChange({target: {value: 2}});
    expect(wrapper.state().rating).toBe(2);
  });

  it(`Если пользователь изменяет комментарий, то обновляем состояние стейта`, () => {
    const wrapper = shallow(<MockComponentWrapped id={0} addComment={() => {}}/>);

    expect(wrapper.state()).toEqual({
      rating: 0,
      comment: ``,
      error: ``,
      success: ``,
      disabled: false,
    });

    wrapper.props().onCommentChange({target: {value: `Comment`}});
    expect(wrapper.state().comment).toBe(`Comment`);
  });

  it(`Если пользователь отправляет отзыв, то обновляем состояние стейта`, () => {
    const wrapper = shallow(<MockComponentWrapped id={0} addComment={() => {}}/>);

    expect(wrapper.state()).toEqual({
      rating: 0,
      comment: ``,
      error: ``,
      success: ``,
      disabled: false,
    });

    wrapper.props().onSubmit({preventDefault: () => {}});
    expect(wrapper.state().disabled).toBe(true);
  });
});
