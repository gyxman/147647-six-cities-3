import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const MONTH_NAMES = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

export class ReviewsItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;
    const {name, image, rating, description, date} = review;
    const dateFormatted = new Date(date.split(`-`).join(`,`));
    const year = dateFormatted.getFullYear();
    const month = MONTH_NAMES[dateFormatted.getMonth()];
    const fixRating = Math.round(rating) / 5 * 100;

    return <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={image} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${fixRating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime={date}>{month} {year}</time>
      </div>
    </li>;
  }
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired
};
