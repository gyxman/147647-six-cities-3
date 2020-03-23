import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onOfferTitleHover, onOfferTitleClick, offer, className} = this.props;

    const {title, preview_image, price, type, is_premium, rating} = offer;
    const fixRating = (Math.round(rating) / 5) * 100;

    return (
      <article
        className={className + `card place-card`}
        onMouseEnter={() => onOfferTitleHover(offer)}
        onMouseLeave={() => onOfferTitleHover(null)}
      >
        {is_premium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className={className + `image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img
              className="place-card__image"
              src={preview_image}
              width="260"
              height="200"
              alt={title}
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
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
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onOfferTitleHover: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  offer: PropTypes.shape({}).isRequired,
  /*className: PropTypes.string.isRequired,*/
};
