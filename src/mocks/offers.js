import {PlaceType} from "../enums/place-type.enum";

export default [
  {
    name: `Beautiful & luxurious apartment at great location`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    image: `https://picsum.photos/260/200`,
    photos: [
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`
    ],
    price: `120`,
    time: `night`,
    type: PlaceType.Apartment,
    isPremium: true,
    rating: 3.1,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [
      `Wifi`, `Heating`, `Kitchen`, `Cable TV`
    ],
    owner: {
      picture: `https://picsum.photos/74/74`,
      name: `Mike`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    name: `Wood and stone place`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    image: `https://picsum.photos/260/200`,
    photos: [
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`
    ],
    price: `80`,
    time: `night`,
    type: PlaceType.Room,
    isPremium: false,
    rating: 4.3,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [
      `Wifi`, `Heating`, `Kitchen`, `Cable TV`
    ],
    owner: {
      picture: `https://picsum.photos/74/74`,
      name: `Mika`,
      isSuper: false,
    },
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    name: `Canal View Prinsengracht`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    image: `https://picsum.photos/260/200`,
    photos: [
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`
    ],
    price: `132`,
    time: `night`,
    type: PlaceType.Apartment,
    isPremium: false,
    rating: 4.2,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [
      `Wifi`, `Heating`, `Kitchen`, `Cable TV`
    ],
    owner: {
      picture: `https://picsum.photos/74/74`,
      name: `Mike`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.929309666406198]
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
    ],
    image: `https://picsum.photos/260/200`,
    photos: [
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`,
      `https://picsum.photos/260/200`
    ],
    price: `180`,
    time: `night`,
    type: PlaceType.Apartment,
    isPremium: true,
    rating: 4.4,
    countOfBedrooms: `3 Bedrooms`,
    maxCountOfGuests: `Max 4 adults`,
    equipment: [
      `Wifi`, `Heating`, `Kitchen`, `Cable TV`
    ],
    owner: {
      picture: `https://picsum.photos/74/74`,
      name: `Mike`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198]
  }
];
