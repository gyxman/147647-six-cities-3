import React from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

export class Map extends React.Component {
  // TODO тут нужен рефакторинг компонента

  constructor(props) {
    super(props);

    this.mapRef = React.createRef();

    this.state = {
      markers: {},
    };

    this.map = null;
    this.activeOffer = null;
  }


  componentDidMount() {
    const {offers} = this.props;
    const {markers} = this.state;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const city = [52.38333, 4.9];

    const zoom = 12;

    this.map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    this.map.setView(city, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }).addTo(this.map);

    offers.forEach((offer) => {
      markers[offer] = leaflet.marker([offer.latitude, offer.longitude], {icon}).addTo(this.map);
    });
  }

  _renderActiveDot(dot) {
    const icon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
    });

    this.activeOffer = leaflet.marker([dot.latitude, dot.longitude], {icon}).addTo(this.map);
  }

  _unrenderDot(dot) {
    this.map.removeLayer(dot);
  }

  shouldComponentUpdate(nextProps) {
    const {activeOffer} = nextProps;

    if (activeOffer) {
      this._renderActiveDot(activeOffer);
    } else {
      this._unrenderDot(this.activeOffer);
    }

    return true;
  }

  render() {
    const {className} = this.props;

    return <section className={className + ` map`} id="map" ref={this.mapRef} />;
  }
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  activeOffer: PropTypes.arrayOf(PropTypes.number),
};
