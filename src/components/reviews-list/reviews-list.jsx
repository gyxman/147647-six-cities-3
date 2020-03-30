import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {ReviewsItem} from "../reviews-item/reviews-item.jsx";

export class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this.props;

    return <ul className="reviews__list">
      {reviews.map((item, i) => <ReviewsItem key={`${i}-${item.name}`} review={item} />)}
    </ul>;
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};
