import {extend, getOffers} from './utils';

const offers = [
  {
    city: {
      name: 'Moscow',
    },
  },
  {
    city: {
      name: 'Amsterdam',
    },
  },
];

describe('Тестирование вспомогательных функций', () => {
  it(`Если мы вызываем функцию extend и передаем в нее 2 обьекта, то получаем на выходе объект, в который скопированы все свойства переданных объектов`, () => {
    expect(extend({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
  });

  it(`Если мы вызываем функцию getOffers и передаем в нее название города и список предложений, то получаем на выходе список предложений по этому городу`, () => {
    expect(getOffers(`Moscow`, offers)).toEqual([
      {
        city: {
          name: `Moscow`,
        },
      },
    ]);
  });
});
