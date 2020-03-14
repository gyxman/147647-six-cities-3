import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onHover, onOfferTitleClick, offer, className} = this.props;
    const {name, image, price, time, type, isPremium, rating} = offer;
    const fixRating = (Math.round(rating) / 5) * 100;

    return (
      <article
        className={className + `card place-card`}
        onMouseEnter={() => onHover(offer)}
        onMouseLeave={() => onHover(null)}
      >
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={className + `image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img
              className="place-card__image"
              src={image}
              width="260"
              height="200"
              alt={name}
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;{time}</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${fixRating}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={() => onOfferTitleClick(offer)}>
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
};
