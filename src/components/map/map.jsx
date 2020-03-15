import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import * as leaflet from 'leaflet';

export class Map extends PureComponent {
  // TODO тут нужен рефакторинг компонента

  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    const city = [52.38333, 4.9];

    const zoom = 12;
    const map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        },
      )
      .addTo(map);

    offers.forEach(offer => {
      leaflet.marker(offer, {icon}).addTo(map);
    });
  }

  render() {
    const {className} = this.props;

    return <section className={className + ` map`} id="map" ref={this.mapRef} />;
  }
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number.isRequired).isRequired)
    .isRequired,
};
