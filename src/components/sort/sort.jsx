import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Sorts} from '../../models/sorts';
import {SortType} from '../../enums/sort-type.enum';

export class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currencySort: SortType.Popular,
    };

    this._onSortButtonClickHandler = this._onSortButtonClickHandler.bind(this);
  }

  _onSortButtonClickHandler(sort) {
    this.setState({
      currencySort: sort,
    });
  }

  render() {
    const {currencySort} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          {Sorts.map((sort, index) => (
            <li
              key={index + sort.key}
              className={
                `places__option` +
                (currencySort === sort.key ? ` places__option--active` : ``)
              }
              tabIndex="0"
              onClick={this._onSortButtonClickHandler.bind(null, sort.key)}
            >
              {sort.name}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  onSortButtonClick: PropTypes.func.isRequired,
};
