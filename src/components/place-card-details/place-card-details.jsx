import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ReviewsList} from '../reviews-list/reviews-list.jsx';
import {PlacesList} from '../places-list/places-list.jsx';
import withActiveItem from "../../hocs/withActiveItem/with-active-item";

const PlacesListWrapped = withActiveItem(PlacesList);

export class PlaceCardDetails extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  _offerTitleClickHandler(offer) {
    this.props.onOfferTitleClick(offer);
  }

  _offerTitleHoverHandler(offer) {
    this.setState({activeOffer: offer});
  }

  render() {
    const {offer} = this.props;
    const {neighbourhoods} = this.props;
    const {activeOffer} = this.state;
    const {
      name,
      description,
      photos,
      price,
      time,
      type,
      isPremium,
      rating,
      countOfBedrooms,
      maxCountOfGuests,
      equipment,
      owner,
      reviews,
    } = offer;
    const {name: ownerName, picture: ownerPicture, isSuper: ownerIsSuper} = owner;
    const fixRating = (Math.round(rating) / 5) * 100;

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.map((item, i) => (
                <div key={`photo-${i}`} className="property__image-wrapper">
                  <img className="property__image" src={item} alt={name} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{name}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${fixRating}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">
                  {countOfBedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxCountOfGuests}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;{time}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {equipment.map((item, i) => (
                    <li key={`equipment-${i}`} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`property__avatar-wrapper user__avatar-wrapper ${
                      ownerIsSuper ? `property__avatar-wrapper--pro` : ``
                    }`}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={ownerPicture}
                      width="74"
                      height="74"
                      alt={ownerName}
                    />
                  </div>
                  <span className="property__user-name">{ownerName}</span>
                </div>
                <div className="property__description">
                  {description.map((text, i) => (
                    <p key={`text-${i}`} className="property__text">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          {/*<Map
            className={`property__map`}
            offers={neighbourhoods.map((neighbourhood) => neighbourhood.coords)}
            activeOffer={activeOffer ? activeOffer.coords : activeOffer}
          />*/}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesListWrapped className={`near-places__`}
              isTabs={false}
              offers={neighbourhoods}
              onHover={this._offerTitleHoverHandler.bind(this)}
              onSelect={this._offerTitleClickHandler.bind(this)} />
          </section>
        </div>
      </main>
    );
  }
}

PlaceCardDetails.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    price: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    countOfBedrooms: PropTypes.string.isRequired,
    maxCountOfGuests: PropTypes.string.isRequired,
    equipment: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    owner: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        })).isRequired,
  }).isRequired,
  neighbourhoods: PropTypes.array.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};
