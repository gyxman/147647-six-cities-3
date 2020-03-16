import {SortType} from '../enums/sort-type.enum';

export const Sorts = [
  {
    name: `Popular`,
    key: SortType.Popular,
  },
  {
    name: `Price: low to high`,
    key: SortType.ToHigh,
  },
  {
    name: `Price: high to low`,
    key: SortType.ToLow,
  },
  {
    name: `Top rated first`,
    key: SortType.TopRated,
  },
];
