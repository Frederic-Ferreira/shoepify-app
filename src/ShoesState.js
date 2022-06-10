import { nikeMen, nikeWomen } from './images-import/Nike';
import { adidasMen, adidasWomen } from './images-import/Adidas';
import { pumaWomen, pumaMen } from './images-import/Puma';

const { airMax, airZoom, reactInfinity } = nikeMen;
const { metcon7, airMax95, reactPegasus } = nikeWomen;
const { forumBold, forumLowW, stanSmithW } = adidasWomen;
const { forumLow, gazelle, stanSmith } = adidasMen;
const { caProClassic, mirageSport, cityRider } = pumaMen;
const { caliDream, futureRider, mayzeClassic } = pumaWomen;

export const ShoeList = [
  {
    name: 'Air Max 90',
    images: {
      ppl: airMax.ppl,
      scd: airMax.scd,
      thrd: airMax.thrd,
    },
    sexe: 'men',
    brand: 'nike',
    price: 149.99,
    quantity: 0,
  },
  {
    name: 'Air Zoom Pegasus',
    images: {
      ppl: airZoom.ppl,
      scd: airZoom.scd,
      thrd: airZoom.thrd,
    },
    sexe: 'men',
    brand: 'nike',
    price: 119.99,
    quantity: 0,
  },
  {
    name: 'React Infinity Run',
    images: {
      ppl: reactInfinity.ppl,
      scd: reactInfinity.scd,
      thrd: reactInfinity.thrd,
    },
    sexe: 'men',
    brand: 'nike',
    price: 159.99,
    quantity: 0,
  },
  {
    name: 'Nike Metcon 7',
    images: {
      ppl: metcon7.ppl,
      scd: metcon7.scd,
      thrd: metcon7.thrd,
    },
    sexe: 'women',
    brand: 'nike',
    price: 129.99,
    quantity: 0,
  },
  {
    name: 'React Pegasus Trail',
    images: {
      ppl: reactPegasus.ppl,
      scd: reactPegasus.scd,
      thrd: reactPegasus.thrd,
    },
    sexe: 'women',
    brand: 'nike',
    price: 129.99,
    quantity: 0,
  },
  {
    name: 'Air Max 95',
    images: {
      ppl: airMax95.ppl,
      scd: airMax95.scd,
      thrd: airMax95.thrd,
    },
    sexe: 'women',
    brand: 'nike',
    price: 179.99,
    quantity: 0,
  },
  {
    name: 'Stan Smith M',
    images: {
      ppl: stanSmith.ppl,
      scd: stanSmith.scd,
      thrd: stanSmith.thrd,
    },
    sexe: 'men',
    brand: 'adidas',
    price: 110,
    quantity: 0,
  },
  {
    name: 'Forum Low M',
    images: {
      ppl: forumLow.ppl,
      scd: forumLow.scd,
      thrd: forumLow.thrd,
    },
    sexe: 'men',
    brand: 'adidas',
    price: 100,
    quantity: 0,
  },
  {
    name: 'Gazelle',
    images: {
      ppl: gazelle.ppl,
      scd: gazelle.scd,
      thrd: gazelle.thrd,
    },
    sexe: 'men',
    brand: 'adidas',
    price: 100,
    quantity: 0,
  },
  {
    name: 'Stan Smith W',
    images: {
      ppl: stanSmithW.ppl,
      scd: stanSmithW.scd,
      thrd: stanSmithW.thrd,
    },
    sexe: 'women',
    brand: 'adidas',
    price: 110,
    quantity: 0,
  },
  {
    name: 'Forum Low W',
    images: {
      ppl: forumLowW.ppl,
      scd: forumLowW.scd,
      thrd: forumLowW.thrd,
    },
    sexe: 'women',
    brand: 'adidas',
    price: 100,
    quantity: 0,
  },
  {
    name: 'Forum Bold',
    images: {
      ppl: forumBold.ppl,
      scd: forumBold.scd,
      thrd: forumBold.thrd,
    },
    sexe: 'women',
    brand: 'adidas',
    price: 110,
    quantity: 0,
  },
  {
    name: 'CA Pro Classic',
    images: {
      ppl: caProClassic.ppl,
      scd: caProClassic.scd,
      thrd: caProClassic.thrd,
    },
    sexe: 'men',
    brand: 'puma',
    price: 90,
    quantity: 0,
  },
  {
    name: 'Mirage Sport tech',
    images: {
      ppl: mirageSport.ppl,
      scd: mirageSport.scd,
      thrd: mirageSport.thrd,
    },
    sexe: 'men',
    brand: 'puma',
    price: 100,
    quantity: 0,
  },
  {
    name: 'City Rider',
    images: {
      ppl: cityRider.ppl,
      scd: cityRider.scd,
      thrd: cityRider.thrd,
    },
    sexe: 'men',
    brand: 'puma',
    price: 110,
    quantity: 0,
  },
  {
    name: 'Future Rider',
    images: {
      ppl: futureRider.ppl,
      scd: futureRider.scd,
      thrd: futureRider.thrd,
    },
    sexe: 'women',
    brand: 'puma',
    price: 90,
    quantity: 0,
  },
  {
    name: 'Cali Dream Lth',
    images: {
      ppl: caliDream.ppl,
      scd: caliDream.scd,
      thrd: caliDream.thrd,
    },
    sexe: 'women',
    brand: 'puma',
    price: 100,
    quantity: 0,
  },
  {
    name: 'Mayze Classic',
    images: {
      ppl: mayzeClassic.ppl,
      scd: mayzeClassic.scd,
      thrd: mayzeClassic.thrd,
    },
    sexe: 'women',
    brand: 'puma',
    price: 100,
    quantity: 0,
  },
];
