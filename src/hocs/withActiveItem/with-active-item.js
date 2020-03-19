import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeHoveredItem: null,
        activeSelectedItem: null,
      };

      this.handleHover = this.handleHover.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }

    handleHover(value) {
      const {onHover} = this.props;

      this.setState({
        activeHoveredItem: value,
      });

      onHover(value);
    }

    handleSelect(value) {
      const {onSelect} = this.props;

      this.setState({
        activeSelectedItem: value,
      });

      onSelect(value);
    }

    render() {
      return <Component
        {...this.props}
        onHover={this.handleHover}
        onSelect={this.handleSelect}
      />;
    }
  }

  WithActiveItem.propTypes = {
    onHover: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
