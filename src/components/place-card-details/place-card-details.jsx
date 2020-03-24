import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// const PlacesListWrapped = withActiveItem(PlacesList);

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
    // const {activeOffer} = this.state;
    const {
      title,
      description,
      images,
      price,
      type,
      isFavorite,
      rating,
      bedrooms,
      adults,
      goods,
      host,
    } = offer;
    const {name, avatarUrl, isPro} = host;
    const fixRating = (Math.round(rating) / 5) * 100;

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((item, i) => (
                <div key={`photo-${i}`} className="property__image-wrapper">
                  <img className="property__image" src={item} alt={title}/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isFavorite && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${fixRating}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {adults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, i) => (
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
                      isPro ? `property__avatar-wrapper--pro` : ``
                    }`}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={avatarUrl}
                      width="74"
                      height="74"
                      alt={name}
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                </div>
                <div className="property__description">
                  {description}
                </div>
              </div>
              {/* <ReviewsList reviews={reviews} /> */}
            </div>
          </div>
          {/* TODO вывести карту и туда предложения рядом */}
          {/* <Map */}
          {/*  className={`property__map`}*/}
          {/*  offers={neighbourhoods.map((neighbourhood) => neighbourhood.coords)}*/}
          {/*  activeOffer={activeOffer ? activeOffer.coords : activeOffer}*/}
          {/* /> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {/* <PlacesListWrapped className={`near-places__`} */}
            {/*  isTabs={false}*/}
            {/*  offers={neighbourhoods}*/}
            {/*  onHover={this._offerTitleHoverHandler.bind(this)}*/}
            {/*  onSelect={this._offerTitleClickHandler.bind(this)} />*/}
          </section>
        </div>
      </main>
    );
  }
}

PlaceCardDetails.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    price: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.string.isRequired,
    adults: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
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
  onOfferTitleClick: PropTypes.func.isRequired,
};
